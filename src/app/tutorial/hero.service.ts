import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
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
  providedIn: 'root'
})
export class HeroService {
  /*
   * InMemoryWebApi 的接口地址格式：:base/:collectionName
   */
  private heroesUrl: string = 'api/heroes';

  /*
   * 声明一个 parameter property，完成 service 的注入
   */
  constructor(private http: HttpClient, private messageService: MessageService) {}

  /**
   * 获取英雄列表
   * @return {Hero[]}
   */
  getHeroes(): Observable<Array<Hero>> {
    /*
     * 通常来讲，一个 Observable 可以多次返回，
     * 但是对于 HttpClient 来讲，它的请求方法返回的 Observable 只会返回一次
     */
    return this.http.get<Array<Hero>>(this.heroesUrl).pipe(
      tap(() => {
        this.log('英雄列表加载成功');
      }),
      catchError(this.handleError<Array<Hero>>('getHeroes', []))
    );
  }

  /**
   * 根据ID获取英雄
   * @param id 英雄ID
   * @return {Observable<Hero>}
   */
  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap(() => {
        this.log(`查询英雄 [ id = ${id} ]`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /**
   * 打印日志消息
   * @param message 消息
   */
  log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * 处理请求错误
   * @param operation 操作
   * @param result 默认结果
   */
  private handleError<T>(operation: string = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      this.log(`${operation} FAILED: ${err.body.error}`);
      return of(result as T);
    };
  }
}
