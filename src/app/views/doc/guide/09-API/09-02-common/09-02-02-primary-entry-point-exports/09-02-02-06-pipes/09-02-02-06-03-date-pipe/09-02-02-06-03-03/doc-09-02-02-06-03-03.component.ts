import { Component, OnInit } from '@angular/core';

/*
 * https://angular.io/api/common/DatePipe#custom-format-options
 */
@Component({
  selector: 'app--doc-09-02-02-06-03-03',
  templateUrl: './doc-09-02-02-06-03-03.component.html',
})
export class Doc090202060303Component implements OnInit {
  public now: Date = new Date();

  public ngOnInit() {}
}
