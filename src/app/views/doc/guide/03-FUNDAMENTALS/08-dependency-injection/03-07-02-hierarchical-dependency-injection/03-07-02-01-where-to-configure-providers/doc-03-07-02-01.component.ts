import { Component, OnInit } from '@angular/core';
import { Doc030702010302ervice } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-03/service/doc-03-07-02-01-03-02.service';

@Component({
  selector: 'app--doc-03-07-02-01',
  templateUrl: './doc-03-07-02-01.component.html',
})
export class Doc03070201Component implements OnInit {
  constructor(private doc030702010302ervice: Doc030702010302ervice) {}

  public ngOnInit() {
    this.doc030702010302ervice.doSomething(Doc03070201Component.name);
  }
}
