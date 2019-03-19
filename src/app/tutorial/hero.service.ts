import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './heroes-mock';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

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
    this.log('英雄列表加载成功');
    return this.http.get<Array<Hero>>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`查询英雄 [ id = ${id} ]`);

    const hero: Hero | undefined = HEROES.find(hero => hero.id === id);

    if (!hero) {
      throw new Error('找不到对应的英雄');
    }

    return of(hero);
  }

  log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
