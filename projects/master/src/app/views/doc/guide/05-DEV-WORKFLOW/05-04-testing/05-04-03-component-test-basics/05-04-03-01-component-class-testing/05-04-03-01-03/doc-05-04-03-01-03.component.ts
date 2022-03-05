import { Component, OnInit } from '@angular/core';
import { Doc0504030103Service } from '@app/views/doc/guide/05-DEV-WORKFLOW/05-04-testing/05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-03/services/doc-05-04-03-01-03.service';

/*
 * https://angular.io/guide/testing#component-class-testing
 */
@Component({
  selector: 'app--doc-05-04-03-01-03',
  templateUrl: './doc-05-04-03-01-03.component.html',
})
export class Doc0504030103Component implements OnInit {
  public welcome: string = '';

  constructor(private doc0504030103Service: Doc0504030103Service) {}

  public ngOnInit() {
    this.welcome = this.doc0504030103Service.isLoggedIn
      ? `WELCOME ${this.doc0504030103Service.user.name}`
      : 'PLEASE LOGIN';
  }
}
