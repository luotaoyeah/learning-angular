import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-11-02',
  templateUrl: './doc-03-02-11-02.component.html',
})
export class Doc03021102Component implements OnInit {
  birthday: Date = new Date(1999, 0, 1);
  toggle = false;

  get format(): string {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  constructor() {}

  ngOnInit() {}

  toggleFormat(): void {
    this.toggle = !this.toggle;
  }
}
