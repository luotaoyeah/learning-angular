import { Component, Injector } from '@angular/core';
import { Doc0303080401Service } from './01/doc-03-03-08-04.01.service';
import { createCustomElement, NgElementConstructor } from '@angular/elements';
import { Doc0303080401Component } from './01/doc-03-03-08-04.01.component';

/*
 * https://angular.io/guide/elements#example-a-popup-service
 */
@Component({
  selector: 'app-doc-03-03-08-04',
  templateUrl: './doc-03-03-08-04.component.html',
})
export class Doc03030804Component {
  constructor(injector: Injector, public doc0303080401Service: Doc0303080401Service) {
    const ElementConstructor: NgElementConstructor<Doc0303080401Component> = createCustomElement<
      Doc0303080401Component
    >(Doc0303080401Component, {
      injector,
    });

    window.customElements.define('app-doc-03-03-08-04-01-element', ElementConstructor);
  }
}
