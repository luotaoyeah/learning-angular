import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

/*
 * https://angular.io/api/core/ChangeDetectionStrategy#members
 */
@Component({
  selector: 'app-doc-09-01-02-05-06-01',
  templateUrl: './doc-09-01-02-05-06-01.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Doc090102050601Component implements DoCheck {
  public count: number = 0;

  constructor() {}

  public ngDoCheck(): void {
    this.count++;
  }
}
