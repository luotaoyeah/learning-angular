import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-03',
  templateUrl: './doc-03-02-05-03.component.html'
})
export class Doc03020503Component implements OnInit {
  minor = 0;
  major = 0;

  constructor() {}

  ngOnInit() {}

  updateMajor() {
    this.minor = 0;
    this.major++;
  }

  updateMinor() {
    this.minor++;
  }
}
