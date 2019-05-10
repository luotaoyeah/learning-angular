import { Component, OnInit } from '@angular/core';
import { Doc05070415Service } from '../service/05-07-04-15.service';

@Component({
  selector: 'app-doc-05-07-04-15-02',
  templateUrl: './doc-05-07-04-15-02.component.html',
  providers: [Doc05070415Service],
})
export class Doc0507041502Component implements OnInit {
  public foo: string = '';

  constructor(public doc05070415Service: Doc05070415Service) {}

  public ngOnInit() {
    this.foo = this.doc05070415Service.foo();
  }
}
