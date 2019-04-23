import { Component, OnInit } from '@angular/core';
import { Doc030702010201Service } from './service/doc-03-07-02-01-02-01.service';

@Component({
  selector: 'app-doc-03-07-02-01-02',
  templateUrl: './doc-03-07-02-01-02.component.html',
})
export class Doc0307020102Component implements OnInit {
  constructor(private doc030702010201Service: Doc030702010201Service) {}

  ngOnInit() {
    this.doc030702010201Service.doSomething();
  }
}
