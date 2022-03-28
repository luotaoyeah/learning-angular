import { Component } from '@angular/core';
import { Doc03030507Service } from '@app/views/doc/guide/main-concepts/03-components-templates/05-component-interaction/07-parent-and-children-communicate-via-a-service/service/doc-03-03-05-07.service';

@Component({
  selector: 'app--doc-03-03-05-07-01',
  templateUrl: './doc-03-03-05-07.01.component.html',
})
export class Doc0303050701Component {
  constructor(public doc03020507Service: Doc03030507Service) {}
}
