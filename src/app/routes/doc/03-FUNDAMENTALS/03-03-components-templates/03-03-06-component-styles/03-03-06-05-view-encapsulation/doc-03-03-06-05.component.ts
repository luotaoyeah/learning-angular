import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/*
 * https://angular.io/guide/component-styles#view-encapsulation
 */
@Component({
  selector: 'app-doc-03-03-06-05',
  templateUrl: './doc-03-03-06-05.component.html',
  encapsulation: ViewEncapsulation.Emulated,
})
export class Doc03030605Component implements OnInit {
  public ngOnInit() {}
}
