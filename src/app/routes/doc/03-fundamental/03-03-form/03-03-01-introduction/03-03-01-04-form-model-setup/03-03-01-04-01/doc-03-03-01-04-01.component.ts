import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * https://angular.io/guide/forms-overview#setup-in-reactive-forms
 */
@Component({
  selector: 'app-doc-03-03-01-04-01',
  templateUrl: './doc-03-03-01-04-01.component.html',
})
export class Doc0303010401Component {
  /*
   * 在 component class 中创建一个 FormControl 对象,
   * 然后通过 FormControlDirective(formControl) 指令, 绑定到 <input /> 元素上面
   */
  public colorFormControl: FormControl = new FormControl('yellow');
}
