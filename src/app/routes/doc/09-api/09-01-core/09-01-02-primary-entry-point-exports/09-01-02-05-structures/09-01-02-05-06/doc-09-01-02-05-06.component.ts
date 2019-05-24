import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/*
 * https://angular.io/api/core/ChangeDetectionStrategy
 */
@Component({
  selector: 'app-doc-09-01-02-05-06',
  templateUrl: './doc-09-01-02-05-06.component.html',
})
export class Doc0901020506Component implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.assert(ChangeDetectionStrategy.OnPush === 0);
    console.assert(ChangeDetectionStrategy.Default === 1);
  }
}
