import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { passwordValidator } from './password-validator';

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
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidator('password', 'repeatPassword')(control);
  }
}
