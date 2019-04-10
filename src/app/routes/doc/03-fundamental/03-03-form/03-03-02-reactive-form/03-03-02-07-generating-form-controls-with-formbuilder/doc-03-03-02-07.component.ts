import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-07',
  templateUrl: './doc-03-03-02-07.component.html',
})
export class Doc03030207Component implements OnInit {
  /*
   * 除了可以使用构造函数手动创建 FormControl，FormGroup，FormArray 之外，
   * 还可以使用 FormBuilder.control()，FormBuilder.group()，FormBuilder.array() 方法，
   * 比较方便的创建比较复杂的表单，
   * 如下，每一个 FormControl 的值是一个数组，它的第一个元素表示初始值
   */
  profileFormGroup: FormGroup = this.formBuilder.group({
    name: [''],
    address: this.formBuilder.group({
      street: [''],
      zip: [''],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}