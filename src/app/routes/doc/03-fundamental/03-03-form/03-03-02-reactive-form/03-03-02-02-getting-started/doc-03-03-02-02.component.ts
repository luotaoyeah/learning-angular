import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-02',
  templateUrl: './doc-03-03-02-02.component.html',
})
export class Doc03030202Component implements OnInit {
  /*
   * 首先需要在 component class 中定义一个 FormControl 对象实例，
   * 它的构造函数中可以设置初始数据
   */
  nameFormControl: FormControl = new FormControl('');

  constructor() {}

  ngOnInit() {}
}
