import { Component } from '@angular/core';
import { Doc03030507Service } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/07-parent-and-children-communicate-via-a-service/service/doc-03-03-05-07.service';

/*
 * https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
 */
@Component({
  selector: 'app--doc-03-03-05-07',
  templateUrl: './doc-03-03-05-07.component.html',
  /*
   * 通过父组件的 `providers` 选项注册一个 service 之后, 在子组件中就可以直接注入这个 service 实例,
   * 并且父组件和子组件注入的是同一个 service 实例, 从而实现数据共享
   */
  providers: [Doc03030507Service],
})
export class Doc03030507Component {
  constructor(private doc03030507Service: Doc03030507Service) {}

  public increment() {
    this.doc03030507Service.foo++;
  }
}
