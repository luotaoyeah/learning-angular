import { Component } from '@angular/core';

/*
 * https://angular.io/api/common/NgTemplateOutlet
 */
@Component({
  selector: 'app--doc-09-02-02-05-11-03',
  templateUrl: './doc-09-02-02-05-11-03.component.html',
})
export class Doc090202051103Component {
  public items: Array<{ name: string }> = [
    { name: 'FOO' },
    { name: 'BAR' },
    { name: 'BAZ' },
  ];
}
