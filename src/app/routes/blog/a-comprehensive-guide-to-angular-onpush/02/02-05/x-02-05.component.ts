import { Component, ContentChild, OnInit } from '@angular/core';
import { X020501Component } from './02-05-01/x-02-05-01.component';

@Component({
  selector: 'app--x-02-05',
  templateUrl: './x-02-05.component.html',
})
export class X0205Component implements OnInit {
  @ContentChild(X020501Component, { static: false })
  private x020501Component!: X020501Component;

  public ngOnInit(): void {
    setTimeout(() => {
      /*
       * 通过下面的方式, 直接修改 x020501Component 的 input property 的值,
       * 并不会触发 x020501Component 的 change detection cycle,
       * 前面说的通过修改 input property reference 来触发 change detection cycle 的方式,
       * 必须在 template 中显式使用 data binding 来触发, 而不能像这样在代码中来修改
       */
      this.x020501Component.content01 = 'BAR';

      /*
       * 将 input property 声明为一个 setter,
       * 并在该 setter 中调用 ChangeDetectorRef.markForCheck() 方法,
       * 则可以触发 change detection cycle
       */
      this.x020501Component.content02 = 'BAR';
    }, 5000);
  }
}
