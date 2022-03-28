import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * @param passwordField passwordField name
 * @param repeatPasswordField repeatPasswordField name
 */
export function passwordValidator(passwordField: string, repeatPasswordField: string): ValidatorFn {
  /*
   * 通过 AbstractControl.get() 方法获取到 FormGroup 下面的某个 FormControl 对象
   */
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl: FormControl | null = formGroup.get(passwordField) as FormControl | null;
    const repeatPasswordControl: FormControl | null = formGroup.get(repeatPasswordField) as FormControl | null;

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
