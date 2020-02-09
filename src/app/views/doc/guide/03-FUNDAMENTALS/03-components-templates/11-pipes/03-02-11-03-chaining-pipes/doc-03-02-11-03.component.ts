import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-11-03',
  templateUrl: './doc-03-02-11-03.component.html',
})
export class Doc03021103Component implements OnInit {
  public birthday: Date = new Date(1999, 0, 1);
  public toggle = false;

  get format(): string {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  public ngOnInit() {}

  public toggleFormat(): void {
    this.toggle = !this.toggle;
  }
}
