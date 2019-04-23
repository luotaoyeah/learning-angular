import { Injectable } from '@angular/core';

/*
 * 在 injector hierarchy 中，各级 injector 是相互独立的，
 * 也就是说，如果某个 provider 既配置了 providedIn: 'root'，表示将它注册到 root injector 中，
 * 同时又在某个 @Component.providers 中配置了，表示将它注册到这个 component injector，
 * 那么它们之间不会相互影响，各自可以正常工作，
 * 当在 component 中注入时，优先使用 component injector 中的实例，
 * 当在 component tree 之外注入时，优先使用 root injector 中的实例
 */
@Injectable({
  providedIn: 'root',
})
export class Doc030702010302ervice {
  doSomething(message: string = ''): void {
    console.log(`[${Doc030702010302ervice.name}] ${message}`);
  }
}
