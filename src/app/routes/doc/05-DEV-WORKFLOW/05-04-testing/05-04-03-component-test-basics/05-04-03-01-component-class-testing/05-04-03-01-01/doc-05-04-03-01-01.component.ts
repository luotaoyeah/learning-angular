import { Component } from '@angular/core';

/*
 * https://angular.io/guide/testing#component-class-testing
 */
@Component({
  selector: 'app--doc-05-04-03-01-01',
  templateUrl: './doc-05-04-03-01-01.component.html',
})
export class Doc0504030101Component {
  public isOn: boolean = false;

  get message(): string {
    return `${this.isOn ? 'ON' : 'OFF'}`;
  }

  public handleClick(): void {
    this.isOn = !this.isOn;
  }
}
