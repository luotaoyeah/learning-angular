import { Component, OnInit } from '@angular/core';
import { Doc05040403Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-04-component-test-scenarios/05-04-04-03-component-with-a-dependency/services/doc-05-04-04-03.service';

/*
 * https://angular.io/guide/testing#component-with-a-dependency
 */
@Component({
  selector: 'app--doc-05-04-04-03',
  templateUrl: './doc-05-04-04-03.component.html',
})
export class Doc05040403Component implements OnInit {
  public message: string = '';

  constructor(private doc05070403Service: Doc05040403Service) {}

  public ngOnInit() {
    this.message = `${this.doc05070403Service.name}BAR`;
  }
}
