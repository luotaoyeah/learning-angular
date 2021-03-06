import { Injectable } from '@angular/core';

/*
 * 如果在 @Injectable 中配置了 providedIn: 'root'，
 * 则这个 service 可以在任何地方被依赖，
 * root injector 将会负责对它进行注入
 */
@Injectable({
  providedIn: 'root',
})
export class Doc030702010101Service {
  public doSomething(): void {
    console.log(`[${Doc030702010101Service.name}]`);
  }
}
