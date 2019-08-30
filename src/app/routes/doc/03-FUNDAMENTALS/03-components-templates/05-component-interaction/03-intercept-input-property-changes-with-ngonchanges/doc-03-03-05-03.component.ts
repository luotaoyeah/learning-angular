import { Component } from '@angular/core';

/*
 * https://angular.io/guide/component-interaction#intercept-input-property-changes-with-ngonchanges
 */
@Component({
  selector: 'app-doc-03-03-05-03',
  templateUrl: './doc-03-03-05-03.component.html',
})
export class Doc03030503Component {
  public major: number = 0;
  public minor: number = 0;

  public updateMajor() {
    this.minor = 0;
    this.major++;
  }

  public updateMinor() {
    this.minor++;
  }
}
