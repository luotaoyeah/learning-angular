import { Component, OnInit } from '@angular/core';

/*
 * https://angular.io/api/common/DatePipe
 */
@Component({
  selector: 'app-doc-09-02-02-06-03',
  templateUrl: './doc-09-02-02-06-03.component.html',
})
export class Doc0902020603Component implements OnInit {
  public now01: Date = new Date();
  public now02: number = Date.now();
  public now03: string = this.now01.toISOString();

  constructor() {}

  public ngOnInit() {}
}
