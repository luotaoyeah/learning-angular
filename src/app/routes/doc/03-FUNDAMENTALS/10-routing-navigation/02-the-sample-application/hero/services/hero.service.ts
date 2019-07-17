import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: _HttpClient) {}

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
