import { Component, OnInit } from '@angular/core';

/*
 * https://angular.io/api/common/DatePipe#parameters
 */
@Component({
  selector: 'app-doc-09-02-02-06-03-04',
  templateUrl: './doc-09-02-02-06-03-04.component.html',
})
export class Doc090202060304Component implements OnInit {
  public now: Date = new Date();

  public ngOnInit() {}
}
