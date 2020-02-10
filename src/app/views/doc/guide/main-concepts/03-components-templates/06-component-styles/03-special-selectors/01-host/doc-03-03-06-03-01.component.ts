import { Component } from '@angular/core';

/*
 * https://angular.io/guide/component-styles#host
 */
@Component({
  selector: 'app--doc-03-03-06-03-01',
  templateUrl: './doc-03-03-06-03-01.component.html',
})
export class Doc0303060301Component {
  public isActive: boolean = false;

  public toggleActive() {
    this.isActive = !this.isActive;
  }
}
