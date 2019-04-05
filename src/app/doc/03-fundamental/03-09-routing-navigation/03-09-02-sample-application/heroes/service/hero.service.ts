import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {}

  /**
   * 获取英雄列表
   */
  getHeroes(): Observable<Array<Hero>> {
    return this.http.get<Array<Hero>>(this.heroesUrl).pipe(
      tap(() => {
        console.log('[加载英雄列表]');
      }),
      catchError(this.handleError<Array<Hero>>('getHeroes', [])),
    );
  }

  /**
   * 根据ID获取英雄
   * @param id 英雄ID
   */
  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(() => {
        console.log(`[查询英雄]: [ id = ${id} ]`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`)),
    );
  }

  /**
   * 更新英雄
   * @param hero 英雄
   */
  updateHero(hero: Hero): Observable<any> {
    return this.http
      .put<Hero>(this.heroesUrl, hero, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap(() => {
          console.log(`[更新英雄]: [ id = ${hero.id}]`);
        }),
        catchError(this.handleError<any>(`updateHero`)),
      );
  }

  /**
   * 处理请求错误
   * @param operation 操作
   * @param result 默认结果
   */
  private handleError<T>(operation: string = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      console.log(`${operation} FAILED: ${err.body.error}`);
      return of(result as T);
    };
  }
}
