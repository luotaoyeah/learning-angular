import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/if-you-think-ngdocheck-means-your-component-is-being-checked-read-this-article-36ce63a3f3e5#080b
 */
@Component({
  selector: 'app--x-01',
  templateUrl: './x-01.component.html',
})
export class X01Component {
  public foo: string = 'FOO';

  constructor() {
    setInterval(() => {
      this.foo = new Date().toISOString();
    }, 1000);
  }
}
