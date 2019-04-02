import { Component, OnInit } from '@angular/core';
import { Doc03020507Service } from './service/doc-03-02-05-07.service';

@Component({
  selector: 'app-doc-03-02-05-07',
  templateUrl: './doc-03-02-05-07.component.html',
  /*
   * 通过父组件的 providers 注册 service 之后，
   * 在子组件中就可以直接注入这个 service 并使用，
   * 并且父组件和子组件注入的是同一个 service 实例
   */
  providers: [Doc03020507Service]
})
export class Doc03020507Component implements OnInit {
  constructor(private doc03020507Service: Doc03020507Service) {}

  ngOnInit() {}

  increment() {
    this.doc03020507Service.foo++;
  }
}
