import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * https://angular.io/guide/reactive-forms#replacing-a-form-control-value
 */
@Component({
  selector: 'app--doc-03-03-02-03-02',
  templateUrl: './doc-03-03-02-03-02.component.html',
})
export class Doc0303020302Component {
  public nameFormControl: FormControl = new FormControl('TOM');

  /*
   * 可以直接调用 FormControl.setValue() 方法, 更新 FormControl 对象的数据,
   * 当 FormControl 对象的数据更新之后, 对应的 <input /> 的值会自动更新
   */
  public updateName(): void {
    this.nameFormControl.setValue('OWEN');
  }
}
