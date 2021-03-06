import { Injectable } from '@angular/core';
import { Doc0307020101Module } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-01/doc-03-07-02-01-01.module';

/*
 * 如果在 @Injectable 中配置了 providedIn: SomeModule，
 * 表示这个 injectable 将由 SomeModule 的 injector 来负责注入，
 * 也就是说，其他的地方要依赖这个 injectable 则必须先引入这个 SomeModule
 */
@Injectable({
  providedIn: Doc0307020101Module,
})
export class Doc030702010102Service {
  public doSomething(): void {
    console.log(`[${Doc030702010102Service.name}]`);
  }
}
