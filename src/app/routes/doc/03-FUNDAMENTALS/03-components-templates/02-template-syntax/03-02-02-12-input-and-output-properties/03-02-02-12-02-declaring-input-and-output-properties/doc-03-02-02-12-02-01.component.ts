import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-12-02-01',
  template: '<button styleClass="ui-button-success" (click)="bar.emit(foo)">app-doc-03-02-02-12-02-01</button>&nbsp;',
})
export class Doc030202120201Component implements OnInit {
  /*
   * 使用 @Input 装饰器来声明一个 input property
   */
  @Input() public foo = '';

  /*
   * 使用 @Output 装饰器来声明一个 output property
   */
  @Output() public bar: EventEmitter<string> = new EventEmitter();

  public ngOnInit() {}
}
