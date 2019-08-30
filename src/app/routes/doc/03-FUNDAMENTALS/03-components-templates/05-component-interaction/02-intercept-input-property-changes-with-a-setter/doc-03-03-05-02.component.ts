import { Component } from '@angular/core';

/*
 * https://angular.io/guide/component-interaction#intercept-input-property-changes-with-a-setter
 */
@Component({
  selector: 'app-doc-03-03-05-02',
  templateUrl: './doc-03-03-05-02.component.html',
})
export class Doc03030502Component {
  public bar: string = '';
}
