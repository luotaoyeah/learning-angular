import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-04-form-validation/03-03-04-04-cross-field-validation/validators/password.validator';

/*
 * https://angular.io/guide/form-validation#cross-field-validation
 */
@Component({
  selector: 'app--doc-03-03-04-04',
  templateUrl: './doc-03-03-04-04.component.html',
  styleUrls: ['./doc-03-03-04-04.component.less'],
})
export class Doc03030404Component {
  public formGroup: FormGroup = new FormGroup(
    {
      password: new FormControl('', {
        validators: [Validators.required],
      }),
      repeatPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    },
    /*
     * 如果要验证多个字段, 比如验证'重复密码'必须跟'密码'相同,
     * 则需要将 validator function 设置到这些字段共同的上级控件上, 比如这里的 formGroup,
     * 这样就可以通过 formGroup 同时获取到这两个字段
     */
    {
      validators: [passwordValidator('password', 'repeatPassword')],
    },
  );

  public password: string = '';
  public repeatPassword: string = '';

  public get repeatPasswordControl(): FormControl {
    return this.formGroup.get('repeatPassword') as FormControl;
  }
}
