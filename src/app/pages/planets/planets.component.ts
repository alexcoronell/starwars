import { Component, inject, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { Planet } from './../../models/planet.interface';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  private starWarsService: StarWarsService = inject(StarWarsService);

  planets: Planet[] = [];

  ngOnInit(): void {
    this.getPlanets();
  }

  private getPlanets() {
    this.starWarsService.getPlanets().subscribe({
      next: (res) => {
        const { results } = res as any;
        this.planets = results as Planet[];
        console.log(this.planets);
      },
      error: (e) => console.error(),
    });
  }
}
