import { Component, OnInit } from '@angular/core';

/*
 * https://angular.io/api/common/DatePipe#input-value
 */
@Component({
  selector: 'app--doc-09-02-02-06-03-01',
  templateUrl: './doc-09-02-02-06-03-01.component.html',
})
export class Doc090202060301Component implements OnInit {
  public now01: Date = new Date();
  public now02: number = Date.now();
  public now03: string = this.now01.toISOString();

  public ngOnInit() {}
}
