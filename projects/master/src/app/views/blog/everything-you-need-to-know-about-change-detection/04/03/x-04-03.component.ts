import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f#494e
 */
@Component({
  selector: 'app--x-04-03',
  templateUrl: './x-04-03.component.html',
})
export class X0403Component {
  public foo: Array<number> = [];

  constructor() {
    setInterval(() => {
      this.foo.push(0);
    }, 1000);
  }
}
