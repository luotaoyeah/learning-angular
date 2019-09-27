import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-12-02-02',
  template: '<button styleClass="ui-button-success" (click)="bar.emit(foo)">app-doc-03-02-02-12-02-01</button>&nbsp;',

  /*
   * 也可以在 @Component 装饰器的配置参数中, 使用 inputs 和 outputs 分别声明 input property 和 output property
   */

  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['foo'],
  // tslint:disable-next-line:no-outputs-metadata-property
  outputs: ['bar'],
})
export class Doc030202120202Component {
  public foo = '';
  public bar: EventEmitter<string> = new EventEmitter();
}
