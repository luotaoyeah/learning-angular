import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes-mock';

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
  constructor() {}

  /**
   * 获取英雄列表
   * @return {Hero[]}
   */
  getHeroes(): Array<Hero> {
    return HEROES;
  }
}
