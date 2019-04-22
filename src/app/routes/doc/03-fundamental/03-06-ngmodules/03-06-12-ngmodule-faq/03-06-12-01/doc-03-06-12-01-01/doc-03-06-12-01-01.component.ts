import { Component, OnInit } from '@angular/core';
import { Doc03061201Service } from '../service/doc-03-06-12-01.service';

@Component({
  selector: 'app-doc-03-06-12-01-01',
  template:
    '<app-doc-03-06-12-01-02></app-doc-03-06-12-01-02><app-doc-03-06-12-01-03></app-doc-03-06-12-01-03>',
})
export class Doc0306120101Component implements OnInit {
  constructor(private doc03061201Service: Doc03061201Service) {}

  ngOnInit() {
    console.log(
      `[${Doc0306120101Component.name}]`,
      this.doc03061201Service.doSomething(),
    );
  }
}
