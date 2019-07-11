import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f#cf0d
 */
@Component({
  selector: 'app-x-04-04',
  templateUrl: './x-04-04.component.html',
})
export class X0404Component {
  public foo: string = '';

  public bar: { foo: string } = { foo: '' };

  public changeFoo() {
    this.foo = new Date().toISOString();
  }

  public changeBar() {
    this.bar.foo = new Date().toISOString();
  }
}
