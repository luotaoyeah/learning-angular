import { Component } from '@angular/core';

/*
 * https://angular.io/guide/template-syntax#avoid-side-effects
 */
@Component({
  selector: 'app-doc-03-03-02-07-04',
  templateUrl: './doc-03-03-02-07-04.component.html',
})
export class Doc0303020704Component {
  public getPicUrl(): string {
    return 'assets/images/20190328090519.jpg';
  }
}
