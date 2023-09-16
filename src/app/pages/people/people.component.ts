import { Component, inject, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { People } from 'src/app/models/people.interface';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  private starWarsService: StarWarsService = inject(StarWarsService);

  people: People[] = [];

  ngOnInit(): void {
    this.getPeople();
  }

  private getPeople() {
    this.starWarsService.getPeople().subscribe({
      next: (res) => {
        const { results } = res as any;
        this.people = results as People[];
      },
      error: (e) => console.error(),
    });
  }
}
