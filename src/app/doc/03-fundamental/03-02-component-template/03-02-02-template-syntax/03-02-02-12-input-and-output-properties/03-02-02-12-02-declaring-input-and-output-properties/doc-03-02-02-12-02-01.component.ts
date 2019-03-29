import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-12-02-01',
  template: '<p-button label="app-doc-03-02-02-12-02-01" styleClass="ui-button-success" (onClick)="bar.emit(foo)"></p-button>&nbsp;'
})
export class Doc030202120201Component implements OnInit {
  /*
   * 使用 @Input 装饰器来声明一个 input property
   */
  @Input() foo = '';

  /*
   * 使用 @Output 装饰器来声明一个 output property
   */
  @Output() bar: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
