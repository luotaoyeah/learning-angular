import { Injectable } from '@angular/core';

/*
 * 如果同时使用了 @Injectable.providedIn 和 @NgModule.providers 进行注册，
 * 那么在 @NgModule.providers 中注册的会生效，会覆盖使用 @Injectable.providedIn 注册的
 */
@Injectable({
  providedIn: 'root',
})
export class Doc0307030603Service {
  public K: string = 'FOO';
}
