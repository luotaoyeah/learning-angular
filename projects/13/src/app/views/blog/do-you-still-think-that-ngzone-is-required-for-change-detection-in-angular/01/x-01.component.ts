import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/do-you-still-think-that-ngzone-zone-js-is-required-for-change-detection-in-angular-16f7a575afef#680f
 */
@Component({
  selector: 'app--x-01',
  templateUrl: './x-01.component.html',
})
export class X01Component {
  public foo: string = 'FOO';

  constructor() {
    /*
     * setTimeout() 是一个异步操作, 如果没有启用 NgZone, 就不会自动触发 change detection cycle
     */
    setTimeout(() => {
      this.foo = 'BAR';
    }, 1000);
  }
}
