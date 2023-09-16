import { Component, inject, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { Starship } from 'src/app/models/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {
  private starWarsService: StarWarsService = inject(StarWarsService);

  starships: Starship[] = [];

  ngOnInit(): void {
    this.getStarships();
  }

  private getStarships() {
    this.starWarsService.getStarships().subscribe({
      next: (res) => {
        const { results } = res as any;
        this.starships = results as Starship[];
        console.log(this.starships);
      },
      error: (e) => console.error(),
    });
  }
}
