import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/hero/models/hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}

  /**
   * 获取英雄列表
   */
  public getHeroes(): Observable<Array<Hero>> {
    return this.httpClient.get<Array<Hero>>('api/doc/03/10/02/heroes');
  }

  /**
   * 根据ID获取英雄
   * @param id 英雄ID
   */
  public getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`api/doc/03/10/02/heroes/${id}`);
  }
}
