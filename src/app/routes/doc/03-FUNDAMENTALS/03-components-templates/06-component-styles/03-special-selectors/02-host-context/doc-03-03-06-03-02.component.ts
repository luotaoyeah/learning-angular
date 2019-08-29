import { Component } from '@angular/core';

/*
 * https://angular.io/guide/component-styles#host-context
 */
@Component({
  selector: 'app-doc-03-03-06-03-02',
  templateUrl: './doc-03-03-06-03-02.component.html',
})
export class Doc0303060302Component {
  public isActive: boolean = false;

  public toggleActive() {
    this.isActive = !this.isActive;
  }
}
