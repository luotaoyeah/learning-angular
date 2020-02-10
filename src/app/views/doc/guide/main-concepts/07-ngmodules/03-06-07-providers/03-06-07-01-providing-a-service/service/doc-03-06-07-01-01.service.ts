import { Injectable } from '@angular/core';

/*
 * 使用 @Injectable 装饰器将一个 class 标识为一个'可被注入的对象'
 */
@Injectable({
  /*
   * 如果设置了 providedIn: 'root'，表示这个 service 已经可以在当前应用的任意地方进行注入，
   * 注入的时候，会由 root injector 来负责注入
   */
  providedIn: 'root',
})
export class Doc0306070101Service {
  public doSomeThing() {
    console.log('DO SOMETHING');
  }
}
