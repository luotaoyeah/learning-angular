import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name-validator';

/*
 * 如何在 template-driven form 中使用 custom validator function ？，
 * 需要用一个 directive 将 validator function 包装一下，
 * 这个 directive 需要实现 Validator 接口的 validate() 方法，该方法跟 ValidatorFn 一样，
 * 返回一个 ValidationErrors 对象或者 null（表示验证通过）
 *
 * angular 如何知道这个 directive 是用来验证表单的呢 ？
 * 我们通过 provideres 选项的 provide 设置这个 directive 是给 NG_VALIDATORS 使用的
 */
@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true,
    },
  ],
})
export class ForbiddenNameDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('appForbiddenName') forbiddenName!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName))(control)
      : null;
  }

  constructor() {}
}
