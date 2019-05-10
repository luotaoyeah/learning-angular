import { Component, OnInit } from '@angular/core';
import { Doc030702010302ervice } from './03-07-02-01-03/service/doc-03-07-02-01-03-02.service';

@Component({
  selector: 'app-doc-03-07-02-01',
  templateUrl: './doc-03-07-02-01.component.html',
})
export class Doc03070201Component implements OnInit {
  constructor(private doc030702010302ervice: Doc030702010302ervice) {}

  public ngOnInit() {
    this.doc030702010302ervice.doSomething(Doc03070201Component.name);
  }
}
