import { Component, OnInit } from '@angular/core';
import { Doc030702010102Service } from './service/doc-03-07-02-01-01-02.service';
import { Doc030702010103Service } from './service/doc-03-07-02-01-01-03.service';

@Component({
  selector: 'app--doc-03-07-02-01-01',
  templateUrl: './doc-03-07-02-01-01.component.html',
})
export class Doc0307020101Component implements OnInit {
  constructor(
    private doc030702010102Service: Doc030702010102Service,
    private doc030702010103Service: Doc030702010103Service,
  ) {}

  public ngOnInit() {
    this.doc030702010102Service.doSomething();
    this.doc030702010103Service.doSomething();
  }
}
