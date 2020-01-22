import { ChangeDetectorRef, Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f#47e3
 */
@Component({
  selector: 'app--x-04-01',
  templateUrl: './x-04-01.component.html',
})
export class X0401Component {
  public foo: string = 'FOO';

  /*
   * ChangeDetectorRef.detach() 方法, 用来将 view 从 change detection tree 中分离, 即不再执行 change detection
   */
  constructor(changeDetectorRef: ChangeDetectorRef) {
    setTimeout(() => {
      changeDetectorRef.detach();
      this.foo = 'BAR';
    });
  }
}
