import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/*
 * https://angular.io/guide/reactive-forms#grouping-form-controls
 */
@Component({
  selector: 'app--doc-03-03-02-04',
  templateUrl: './doc-03-03-02-04.component.html',
})
export class Doc03030204Component {
  /*
   * FormGroup 表示一组 FormControl, 通常对应一个 <form/> 元素,
   * FormGroup 对它的 FormControl 进行统一管理,
   * FormGroup 跟 FormControl 拥有相同的属性和方法
   */
  public profileFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('TAO'),
    lastName: new FormControl('LUO'),
  });

  public onSubmit() {
    console.log(`[${Doc03030204Component.name}]\n`, this.profileFormGroup.value);
  }
}
