import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/*
 * https://angular.io/guide/form-validation#reactive-form-validation
 */
@Component({
  selector: 'app-doc-03-03-04-02',
  templateUrl: './doc-03-03-04-02.component.html',
  styleUrls: ['./doc-03-03-04-02.component.less'],
})
export class Doc03030402Component {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      /* 通过 validators 选项来设置同步的验证函数 */
      validators: [Validators.required, Validators.minLength(4)],
      /* 通过 asyncValidators 选项来设置异步的验证函数 */
      asyncValidators: [],
    }),
  });

  /*
   * 为了方便访问某个 control 实例, 可以通过 getter 函数来访问该 control 实例
   */
  get nameControl(): FormControl {
    return this.formGroup.get(['name']) as FormControl;
  }
}
