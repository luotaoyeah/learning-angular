import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * 自定义的 validator function factory
 * validator function 是一种特殊的 function，它的类型为 ValidatorFn，遵循一定的规则：
 *     1. 参数是一个 AbstractControl 实例
 *     2. 返回的是一个 error 对象，或者 null（表示验证通过）

 * @param nameRegExp 敏感词
 */
export function forbiddenNameValidator(nameRegExp: RegExp): ValidatorFn {
  // tslint:disable-next-line:no-any
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRegExp.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
