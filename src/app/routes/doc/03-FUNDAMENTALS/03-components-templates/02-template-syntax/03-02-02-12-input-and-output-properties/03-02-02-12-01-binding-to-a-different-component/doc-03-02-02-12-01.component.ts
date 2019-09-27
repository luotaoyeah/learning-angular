import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-12-01',
  templateUrl: './doc-03-02-02-12-01.component.html',
})
export class Doc0302021201Component implements OnInit {
  public foo = 'FOO';
  /*
   * private property 不能够在 template 中使用
   */
  public bar = 'BAR';

  /*
   * private parameter property 不能够在 template 中使用
   */

  public ngOnInit() {
    console.assert(this.bar === 'BAR');
  }
}
