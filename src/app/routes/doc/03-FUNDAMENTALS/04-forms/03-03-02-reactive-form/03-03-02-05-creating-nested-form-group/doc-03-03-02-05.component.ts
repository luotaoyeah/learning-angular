import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/*
 * https://angular.io/guide/reactive-forms#creating-nested-form-groups
 */
@Component({
  selector: 'app-doc-03-03-02-05',
  templateUrl: './doc-03-03-02-05.component.html',
})
export class Doc03030205Component {
  public profileFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('TAO'),
    lastName: new FormControl('LUO'),
    /*
     * FormGroup 可以嵌套, 也就是说 FormGroup 下面可以同时包含 FormControl 和 FormGroup
     */
    address: new FormGroup({
      street: new FormControl('some street'),
      city: new FormControl('chengdu'),
      state: new FormControl('sichuan'),
      zip: new FormControl('600000'),
    }),
  });

  public onSubmit() {
    console.log(`[${Doc03030205Component.name}]\n`, this.profileFormGroup.value);
  }
}
