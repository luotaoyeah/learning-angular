import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/if-you-think-ngdocheck-means-your-component-is-being-checked-read-this-article-36ce63a3f3e5#aba3
 */
@Component({
  selector: 'app--x-02',
  templateUrl: './x-02.component.html',
})
export class X02Component {
  public foo: { bar: string } = { bar: 'BAR' };

  constructor() {
    setInterval(() => {
      this.foo.bar = new Date().toISOString();
    }, 1000);
  }
}
