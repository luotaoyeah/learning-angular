import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-02-03-02',
  templateUrl: './doc-03-03-02-03-02.component.html',
})
export class Doc0303020302Component implements OnInit {
  public nameFormControl: FormControl = new FormControl('');

  constructor() {}

  public ngOnInit() {}

  /**
   * 可以直接调用 FormControl.setValue() 方法，更新 form control 的数据，
   * 在 reactive form 中，form control 是 source of true，
   * 当 form control 的数据更新之后，对应的 input element 的值会自动更新
   */
  public updateName(): void {
    this.nameFormControl.setValue('OWEN');
  }
}
