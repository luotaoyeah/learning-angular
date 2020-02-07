import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SafeAny } from '../../../../../../typings';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

/*
 * angular 中的 service 是通过 DI（Dependency Injection）来使用的，
 * 这里面有两个角色：
 *     服务提供者（provider）
 *     服务注入者（injector）
 *
 * 通过 @Injectable() 将 HeroService 类注册为一个 provider，
 * 通过 providedIn 将 root 指定为它的 injector
 */

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  /*
   * InMemoryWebApi 的接口地址格式：:base/:collectionName
   */
  private heroesUrl = '/api/heroes';

  /*
   * 声明一个 parameter property，完成 service 的注入
   */
  constructor(private httpClient: HttpClient, private messageService: MessageService) {}

  /**
   * 获取英雄列表
   */
  public getHeroes(): Observable<Array<Hero>> {
    /*
     * 通常来讲，一个 Observable 可以多次返回，
     * 但是对于 HttpClient 来讲，它的请求方法返回的 Observable 只会返回一次
     */
    return this.httpClient.get<Array<Hero>>(this.heroesUrl).pipe(
      tap(() => {
        this.log('[加载英雄列表]');
      }),
      catchError(this.handleError<Array<Hero>>('getHeroes', [])),
    );
  }

  /**
   * 根据ID获取英雄
   * @param id 英雄ID
   */
  public getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(() => {
        this.log(`[查询英雄]: [ id = ${id} ]`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`)),
    );
  }

  /**
   * 更新英雄
   * @param hero 英雄
   */

  public updateHero(hero: Hero): Observable<SafeAny> {
    return this.httpClient
      .put<Hero>(this.heroesUrl, hero, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(
        tap(() => {
          this.log(`[更新英雄]: [ id = ${hero.id}]`);
        }),

        catchError(this.handleError<SafeAny>(`updateHero`)),
      );
  }

  /**
   * 添加英雄
   * @param hero 英雄
   */
  public addHero(hero: Hero): Observable<Hero> {
    return this.httpClient
      .post<Hero>(this.heroesUrl, hero, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        tap((newHero: Hero) => {
          this.log(`[添加英雄]: [ id = ${newHero.id} ]`);
        }),
        catchError(this.handleError<Hero>('addHero')),
      );
  }

  /**
   * 删除英雄
   * @param hero 英雄
   */
  public deleteHero(hero: Hero): Observable<Hero> {
    return this.httpClient
      .delete<Hero>(`${this.heroesUrl}/${hero.id}`, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        tap(() => {
          this.log(`[删除英雄]: [ id = ${hero.id} ]`);
        }),
        catchError(this.handleError<Hero>('deleteHero')),
      );
  }

  /**
   * 搜索英雄
   * @param term 关键字
   */
  public searchHeroes(term: string): Observable<Array<Hero>> {
    if (!term.trim()) {
      return of([]);
    }

    return this.httpClient.get<Array<Hero>>(`${this.heroesUrl}/?name=${term.trim()}`).pipe(
      tap(() => {
        this.log(`[搜索英雄]: [ term = ${term}]`);
      }),
      catchError(this.handleError<Array<Hero>>('searchHeroes')),
    );
  }

  /**
   * 打印日志消息
   * @param message 消息
   */
  public log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * 处理请求错误
   * @param operation 操作
   * @param result 默认结果
   */
  private handleError<T>(operation: string = 'operation', result?: T) {
    return (err: SafeAny): Observable<T> => {
      this.log(`${operation} FAILED: ${err.body.error}`);
      return of(result as T);
    };
  }
}
