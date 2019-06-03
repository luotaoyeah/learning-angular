import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

/**
 * custom validator factory
 * @param passwordField passwordField name
 * @param repeatPasswordField repeatPasswordField name
 */
export function passwordValidator(
  passwordField: string,
  repeatPasswordField: string,
): ValidatorFn {
  /*
   * 当 validator function 用在 formGroup 对象上时,
   * validator function 的第一个参数就是一个 FormGroup 对象,
   * 通过它, 可以获取到它下面的任意某个 FormControl 对象
   */
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl: FormControl | null = formGroup.get(
      passwordField,
    ) as FormControl | null;

    const repeatPasswordControl: FormControl | null = formGroup.get(
      repeatPasswordField,
    ) as FormControl | null;

    if (!passwordControl || !repeatPasswordControl) {
      return null;
    }

    return passwordControl.value !== repeatPasswordControl.value
      ? {
          repeatPassword: { value: repeatPasswordControl.value },
        }
      : null;
  };
}
