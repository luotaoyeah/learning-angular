import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Doc050705Service {
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>('/api/heroes');
  }
}

export class Hero {
  id: number = 0;
  name: string = '';
}
