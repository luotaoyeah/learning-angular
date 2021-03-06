import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
class Doc05040204Service {
  constructor(private httpClient: HttpClient) {}

  public getHeroes(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>('api/heroes');
  }
}

class Hero {
  public id: number = 0;
  public name: string = '';

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export { Hero, Doc05040204Service };
