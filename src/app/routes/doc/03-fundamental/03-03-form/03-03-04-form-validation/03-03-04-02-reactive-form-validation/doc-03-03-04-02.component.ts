import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-04-02',
  templateUrl: './doc-03-03-04-02.component.html',
})
export class Doc03030402Component implements OnInit {
  public formGroup: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  get formGroupName(): FormControl {
    return this.formGroup.get(['name']) as FormControl;
  }

  constructor() {}

  public ngOnInit() {}
}
