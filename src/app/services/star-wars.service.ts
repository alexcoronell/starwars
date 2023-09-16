import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private http: HttpClient = inject(HttpClient)

  private SERVER_URL: string = 'https://swapi.dev/api/';

  getPeople = () => this.http.get(`${this.SERVER_URL}/people`)

  getPlanets = () => this.http.get(`${this.SERVER_URL}/planets`)

  getStarships = () => this.http.get(`${this.SERVER_URL}/starships`)
}
