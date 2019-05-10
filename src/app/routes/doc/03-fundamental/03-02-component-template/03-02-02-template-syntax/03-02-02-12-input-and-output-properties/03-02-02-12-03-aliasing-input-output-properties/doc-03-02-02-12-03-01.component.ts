import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-12-03-01',
  template:
    '<p-button label="app-doc-03-02-02-12-02-01" styleClass="ui-button-success" (onClick)="bar.emit(foo.toUpperCase())"></p-button>&nbsp;',
})
export class Doc030202120301Component implements OnInit {
  /*
   * @Input() 和 @Output() 可以接收一个参数，用来设置 input property 和 output property 的 alias，
   * 设置了别名之后，对外界的使用者来说，使用的是新的别名，而在当前组件内部，则还是使用的属性本来的名字
   */

  // tslint:disable-next-line:no-input-rename
  @Input('myFoo') public foo = '';
  // tslint:disable-next-line:no-output-rename
  @Output('myBar') public bar: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public ngOnInit() {}
}
