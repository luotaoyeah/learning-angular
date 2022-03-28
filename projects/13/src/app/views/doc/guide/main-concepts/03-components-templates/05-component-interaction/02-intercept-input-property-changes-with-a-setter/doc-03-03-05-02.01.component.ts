import { Component, Input } from '@angular/core';

@Component({
  selector: 'app--doc-03-03-05-02-01',
  templateUrl: './doc-03-03-05-02.01.component.html',
})
export class Doc0303050201Component {
  @Input()
  public foo: string = '';

  /*
   * 除了可以将普通的 component class field 标识为 input property 之外（如上面的 foo）,
   * 还可以将 setter（注意不是 getter） 标识为 input property（如下面的 bar）,
   * 这样, 在 setter 函数中就可以对输入的数据进行进一步的处理, 实现对 input property 的拦截处理
   */
  @Input()
  set bar(value: string) {
    this._bar = (value && value.trim().toUpperCase()) || '<BAR DEFAULT>';
  }

  get bar(): string {
    return this._bar;
  }

  // tslint:disable-next-line:variable-name
  private _bar: string = '';
}
