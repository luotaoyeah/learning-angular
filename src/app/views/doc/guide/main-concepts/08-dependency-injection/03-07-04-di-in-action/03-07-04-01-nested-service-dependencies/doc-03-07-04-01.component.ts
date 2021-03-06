import { Component, OnInit } from '@angular/core';
import { Doc0307040101Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-01-nested-service-dependencies/service/doc-03-07-04-01-01.service';

@Component({
  selector: 'app--doc-03-07-04-01',
  templateUrl: './doc-03-07-04-01.component.html',
})
export class Doc03070401Component implements OnInit {
  constructor(private doc0307040101Service: Doc0307040101Service) {}

  public ngOnInit() {
    console.assert(this.doc0307040101Service.getSomething() === '010203');
  }
}
