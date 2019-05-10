import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-05',
  templateUrl: './doc-03-03-02-05.component.html',
})
export class Doc03030205Component implements OnInit {
  public profileFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    /*
     * FormGroup 可以嵌套，也就是说 FormGroup 下面可以同时包含 FormControl 和 FormGroup
     */
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  constructor() {}

  public ngOnInit() {}

  public onSubmit() {
    console.log(this.profileFormGroup.value);
  }
}
