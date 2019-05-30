import { Component, OnInit } from '@angular/core';

/*
 * https://angular.io/guide/pipes#using-pipes
 */
@Component({
  selector: 'app-doc-03-02-11-01',
  templateUrl: './doc-03-02-11-01.component.html',
})
export class Doc03021101Component implements OnInit {
  public birthday: Date = new Date(1999, 0, 1);

  public ngOnInit() {}
}
