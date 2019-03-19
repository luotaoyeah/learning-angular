import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './heroes-mock';
import { MessageService } from './message.service';

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
   * 声明一个 parameter property，完成 service 的注入
   */
  constructor(private messageService: MessageService) {}

  /**
   * 获取英雄列表
   * @return {Hero[]}
   */
  getHeroes(): Observable<Array<Hero>> {
    this.messageService.add('英雄列表加载成功');
    return of(HEROES);
  }
}
