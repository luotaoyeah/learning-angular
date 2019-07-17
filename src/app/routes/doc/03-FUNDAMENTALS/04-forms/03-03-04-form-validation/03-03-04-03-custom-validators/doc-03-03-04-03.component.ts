import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './validators/forbidden-name.validator';

/*
 * https://angular.io/guide/form-validation#custom-validators
 */
@Component({
  selector: 'app-doc-03-03-04-03',
  templateUrl: './doc-03-03-04-03.component.html',
})
export class Doc03030403Component {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      /*
       * custom validator function 如何在 reactive form 中使用 ?
       * 直接跟 built-in validator function 一样使用
       */
      validators: [Validators.required, forbiddenNameValidator(/foo/)],
    }),
  });

  public name: string = '';

  public get nameControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }
}
