import { Component, OnInit } from '@angular/core';
import { Doc05070415Service } from '../service/05-07-04-15.service';

@Component({
  selector: 'app-doc-05-07-04-15-01',
  templateUrl: './doc-05-07-04-15-01.component.html',
  providers: [Doc05070415Service],
})
export class Doc0507041501Component implements OnInit {
  public foo: string = '';

  constructor(public doc05070415Service: Doc05070415Service) {}

  ngOnInit() {
    this.foo = this.doc05070415Service.foo();
  }
}
