import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-03',
  templateUrl: './doc-03-02-05-03.component.html',
})
export class Doc03020503Component implements OnInit {
  public minor = 0;
  public major = 0;

  public ngOnInit() {}

  public updateMajor() {
    this.minor = 0;
    this.major++;
  }

  public updateMinor() {
    this.minor++;
  }
}
