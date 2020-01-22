import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f#fba5
 */
@Component({
  selector: 'app--x-04-02',
  templateUrl: './x-04-02.component.html',
})
export class X0402Component {
  public foo: string = 'FOO';

  constructor() {
    setInterval(() => {
      this.foo = new Date().toISOString();
    }, 1000);
  }
}
