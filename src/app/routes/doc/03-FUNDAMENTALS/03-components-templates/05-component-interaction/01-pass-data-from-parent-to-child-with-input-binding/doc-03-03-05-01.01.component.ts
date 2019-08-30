import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-05-01-01',
  templateUrl: './doc-03-03-05-01.01.component.html',
})
export class Doc0303050101Component {
  /*
   * 子组件通过 `@Input()` 定义一个 input property,
   * 在父组件的模板中就可以通过这个 attribute 传递数据给子组件
   */
  @Input()
  public foo: string = '<FOO DEFAULT>';

  /*
   * input property 在模板中的 attribute 的名称默认就是这个属性名称,
   * 也可以通过 `@Input('someOtherName')` 的参数设置其他的名称
   *
   * 如果父组件没有传递数据, 则该 input property 会使用它的默认值
   */
  // tslint:disable-next-line:no-input-rename
  @Input('myBar')
  public bar: string = '<BAR DEFAULT>';
}
