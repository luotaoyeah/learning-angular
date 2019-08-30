import { Component } from '@angular/core';
import { Doc03030507Service } from './service/doc-03-03-05-07.service';

@Component({
  selector: 'app-doc-03-03-05-07',
  templateUrl: './doc-03-03-05-07.component.html',
  /*
   * 通过父组件的 providers 注册 service 之后,
   * 在子组件中就可以直接注入这个 service 并使用,
   * 并且父组件和子组件注入的是同一个 service 实例
   */
  providers: [Doc03030507Service],
})
export class Doc03030507Component {
  constructor(private doc03030507Service: Doc03030507Service) {}

  public increment() {
    this.doc03030507Service.foo++;
  }
}
