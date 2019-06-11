import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
 * https://angular.io/guide/reactive-forms#getting-started
 */
@Component({
  selector: 'app-doc-03-03-02-02',
  templateUrl: './doc-03-03-02-02.component.html',
})
export class Doc03030202Component implements OnInit {
  /*
   * 首先需要在 component class 中定义一个 FormControl 对象实例,
   * 可以通过它的构造函数参数设置初始数据
   */
  public nameFormControl: FormControl = new FormControl('FOO');

  public ngOnInit() {}
}
