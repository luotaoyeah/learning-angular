import { Component, OnInit } from '@angular/core';
import { Doc030702010201Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-02/service/doc-03-07-02-01-02-01.service';

@Component({
  selector: 'app--doc-03-07-02-01-02',
  templateUrl: './doc-03-07-02-01-02.component.html',
})
export class Doc0307020102Component implements OnInit {
  constructor(private doc030702010201Service: Doc030702010201Service) {}

  public ngOnInit() {
    this.doc030702010201Service.doSomething();
  }
}
