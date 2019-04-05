import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-12-02-02',
  template:
    '<p-button label="app-doc-03-02-02-12-02-01" styleClass="ui-button-success" (onClick)="bar.emit(foo)"></p-button>&nbsp;',

  /*
   * 也可以在 @Component 装饰器的配置参数中，使用 inputs 和 outputs 分别声明 input property 和 output property
   */

  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['foo'],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['bar'],
})
export class Doc030202120202Component implements OnInit {
  foo = '';
  bar: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
