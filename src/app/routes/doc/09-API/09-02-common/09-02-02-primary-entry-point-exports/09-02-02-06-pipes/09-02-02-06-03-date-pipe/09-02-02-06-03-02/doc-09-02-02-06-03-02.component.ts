import { Component, OnInit } from '@angular/core';

/*
 * https://angular.io/api/common/DatePipe#pre-defined-format-options
 */
@Component({
  selector: 'app--doc-09-02-02-06-03-02',
  templateUrl: './doc-09-02-02-06-03-02.component.html',
})
export class Doc090202060302Component implements OnInit {
  public now: Date = new Date();

  public ngOnInit() {}
}
