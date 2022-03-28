import { Component } from '@angular/core';

/*
 * https://angular.io/guide/component-interaction#parent-listens-for-child-event
 */
@Component({
  selector: 'app--doc-03-03-05-04',
  templateUrl: './doc-03-03-05-04.component.html',
})
export class Doc03030504Component {
  public handleVote($event: string) {
    console.log($event);
  }
}
