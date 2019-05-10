import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-08',
  templateUrl: './doc-03-03-02-08.component.html',
})
export class Doc03030208Component implements OnInit {
  /*
   * angular 内置了一些常用的 validator function，
   * 可以通过 Validators 的静态方法来使用它们
   */
  public profileFormGroup: FormGroup = this.formBuilder.group({
    name: [''],
    address: this.formBuilder.group({
      street: ['', [Validators.required]],
      zip: [''],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {}
}
