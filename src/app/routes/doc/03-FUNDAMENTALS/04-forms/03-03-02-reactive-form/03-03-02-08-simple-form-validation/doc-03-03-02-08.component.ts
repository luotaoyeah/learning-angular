import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/*
 * https://angular.io/guide/reactive-forms#simple-form-validation
 */
@Component({
  selector: 'app-doc-03-03-02-08',
  templateUrl: './doc-03-03-02-08.component.html',
})
export class Doc03030208Component {
  /*
   * angular 内置了一些常用的 validator functions,
   * 可以通过 {@link Validators} 的静态方法来使用它们
   */
  public profileFormGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', {
        validators: [Validators.required],
      }),
      zip: new FormControl(''),
    }),
  });

  public handleSubmit() {
    if (this.profileFormGroup.invalid) {
      return;
    }

    console.log(`[${Doc03030208Component.name}]\n`, this.profileFormGroup.value);
  }
}
