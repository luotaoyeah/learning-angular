import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './validator/password-validator';

@Component({
  selector: 'app-doc-03-03-04-04',
  templateUrl: './doc-03-03-04-04.component.html',
})
export class Doc03030404Component implements OnInit {
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
     * 如果某个表单验证涉及到多个字段，比如验证'重复密码'必须跟'密码'相同，
     * 此时，需要将 validator function 放到 formGroup 上去，这样就可以通过 formGroup 同时访问到这两个字段
     */
    {
      validators: [passwordValidator('password', 'repeatPassword')],
    },
  );

  public password: string = '';
  public repeatPassword: string = '';

  public ngOnInit() {}
}
