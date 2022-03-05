import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-03-custom-validators/validators/forbidden-name.validator';

/*
 * https://angular.io/guide/form-validation#custom-validators
 */
@Component({
  selector: 'app--doc-03-03-04-03',
  templateUrl: './doc-03-03-04-03.component.html',
  styleUrls: ['./doc-03-03-04-03.component.less'],
})
export class Doc03030403Component {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      /*
       * custom validator function 跟 built-in validator function 的用法一样
       */
      validators: [Validators.required, forbiddenNameValidator(/foo/)],
    }),
  });

  public name: string = '';

  public get nameControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }
}
