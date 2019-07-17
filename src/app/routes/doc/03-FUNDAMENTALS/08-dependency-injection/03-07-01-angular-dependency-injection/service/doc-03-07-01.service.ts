import { Injectable } from '@angular/core';
import { COLOR } from './doc-03-07-01-mock';
import { Doc03070101Service } from './doc-03-07-01-01.service';

@Injectable({
  providedIn: 'root',
})
export class Doc030701Service {
  /*
   * service 可以依赖其他的 service，并且同样使用 DI 进行注入
   */
  constructor(private doc03070101Service: Doc03070101Service) {}

  public getColor(): string {
    this.doc03070101Service.log(COLOR);

    return COLOR;
  }
}
