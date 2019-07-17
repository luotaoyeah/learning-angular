import { Component, OnInit, Optional } from '@angular/core';
import { Doc030701Service } from './service/doc-03-07-01.service';
import { Doc03070102Service } from './service/doc-03-07-01-02.service';

@Component({
  selector: 'app-doc-03-07-01',
  templateUrl: './doc-03-07-01.component.html',
})
export class Doc030701Component implements OnInit {
  public color!: string;

  /*
   * 如何注入一个 service？
   * 对于 component 来说，在 component 的 constructor 的 parameters 中声明需要注入的 service 类型就可以了，
   * 如下，声明了一个 Doc030701Service 类型的参数，在创建该组件的实例时，angular 的 injector 会自动注入这个 service
   */

  constructor(
    private doc030701Service: Doc030701Service,
    // @ts-ignore
    @Optional() private doc03070102Service: Doc03070102Service,
  ) {
    console.assert(doc03070102Service === null);
  }

  public ngOnInit() {
    this.color = this.doc030701Service.getColor();
  }
}
