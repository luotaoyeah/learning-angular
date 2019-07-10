import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-x-04-01',
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
