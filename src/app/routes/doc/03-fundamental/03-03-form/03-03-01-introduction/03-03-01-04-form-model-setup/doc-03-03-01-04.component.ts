import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doc-03-03-01-04',
  templateUrl: './doc-03-03-01-04.component.html',
})
export class Doc03030104Component implements OnInit {
  /*
   * 在 component class 中显式创建一个 FormControl 实例，
   * 然后在 template 中通过 formControl(FormControlDirective) 指令绑定到某个 input element 上去
   */
  public colorFormControl: FormControl = new FormControl('red');

  public color = 'red';

  public ngOnInit() {}
}
