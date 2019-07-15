import { Component } from '@angular/core';
import { Doc0303080401Service } from './01/doc-03-03-08-04.01.service';

/*
 * https://angular.io/guide/elements#example-a-popup-service
 */
@Component({
  selector: 'app-doc-03-03-08-04',
  templateUrl: './doc-03-03-08-04.component.html',
})
export class Doc03030804Component {
  constructor(public doc0303080401Service: Doc0303080401Service) {}
}
