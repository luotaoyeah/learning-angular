import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * validator function 是一种特殊的 function, 它的类型为 {@link ValidatorFn}, 遵循一定的规则:
 *     1. 参数是一个 AbstractControl 实例
 *     2. 返回值是一个 ValidationErrors 对象, 或者 null（表示验证通过）

 * @param regExp 验证规则
 */
export function forbiddenNameValidator(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden: boolean = regExp.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
