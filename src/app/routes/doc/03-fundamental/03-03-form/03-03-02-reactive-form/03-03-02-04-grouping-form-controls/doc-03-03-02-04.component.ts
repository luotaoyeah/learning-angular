import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-04',
  templateUrl: './doc-03-03-02-04.component.html',
})
export class Doc03030204Component implements OnInit {
  /*
   * FormGroup 表示一组 FormControl，通常对应一个 form element，
   * FormGroup 对它的 FormControl 进行统一管理，
   * FormGroup 跟 FormControl 拥有相同的属性和方法
   */
  profileFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileFormGroup.value);
  }
}
