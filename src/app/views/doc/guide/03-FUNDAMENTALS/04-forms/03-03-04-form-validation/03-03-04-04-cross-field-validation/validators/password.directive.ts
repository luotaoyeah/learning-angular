import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { passwordValidator } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-04-form-validation/03-03-04-04-cross-field-validation/validators/password.validator';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordDirective,
      multi: true,
    },
  ],
})
export class PasswordDirective implements Validator {
  public validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidator('password', 'repeatPassword')(control);
  }
}
