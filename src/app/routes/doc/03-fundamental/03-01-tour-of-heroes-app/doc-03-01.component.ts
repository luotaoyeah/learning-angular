import { Component, OnInit } from '@angular/core';

/*
 * https://angular.io/tutorial#tour-of-heroes-app-and-tutorial
 */
@Component({
  selector: 'app-doc-03-01',
  templateUrl: './doc-03-01.component.html',
  styleUrls: ['./doc-03-01.component.scss'],
})
export class Doc0301Component implements OnInit {
  public title: string = 'TOUR OF HEROES';

  public ngOnInit() {}
}
