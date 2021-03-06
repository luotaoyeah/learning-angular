import { Component, OnInit } from '@angular/core';
import { Doc05040415Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-15-override-component-providers/services/doc-05-04-04-15.service';

@Component({
  selector: 'app--doc-05-04-04-15-01',
  templateUrl: './doc-05-04-04-15-01.component.html',
  providers: [Doc05040415Service],
})
export class Doc0504041501Component implements OnInit {
  public foo: string = '';

  constructor(public doc05070415Service: Doc05040415Service) {}

  public ngOnInit() {
    this.foo = this.doc05070415Service.foo();
  }
}
