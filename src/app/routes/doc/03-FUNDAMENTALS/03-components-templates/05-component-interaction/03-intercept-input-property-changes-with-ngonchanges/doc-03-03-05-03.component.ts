import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-05-03',
  templateUrl: './doc-03-03-05-03.component.html',
})
export class Doc03030503Component {
  public minor = 0;
  public major = 0;

  public updateMajor() {
    this.minor = 0;
    this.major++;
  }

  public updateMinor() {
    this.minor++;
  }
}
