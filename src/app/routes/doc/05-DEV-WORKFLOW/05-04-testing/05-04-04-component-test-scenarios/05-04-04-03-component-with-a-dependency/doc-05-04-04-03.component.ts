import { Component, OnInit } from '@angular/core';
import { Doc05040403Service } from './services/doc-05-04-04-03.service';

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
