import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/*
 * https://angular.io/guide/form-validation#reactive-form-validation
 */
@Component({
  selector: 'app-doc-03-03-04-02',
  templateUrl: './doc-03-03-04-02.component.html',
})
export class Doc03030402Component {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  get nameControl(): FormControl {
    return this.formGroup.get(['name']) as FormControl;
  }
}
