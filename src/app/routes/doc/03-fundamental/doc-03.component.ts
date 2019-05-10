import { Component, OnInit } from '@angular/core';
import { Doc0306070201Service } from './03-06-ngmodules/03-06-07-providers/03-06-07-02-providedin-and-ngmodules/service/doc-03-06-07-02-01.service';
import { Doc0306070202Service } from './03-06-ngmodules/03-06-07-providers/03-06-07-02-providedin-and-ngmodules/service/doc-03-06-07-02-02.service';

@Component({
  selector: 'app-doc-fundamental',
  template: '<router-outlet></router-outlet>',
})
export class Doc03Component implements OnInit {
  constructor(
    private doc0306070201Service: Doc0306070201Service,
    private doc0306070202Service: Doc0306070202Service,
  ) {
    this.doc0306070201Service.doSomeThing();
    this.doc0306070202Service.doSomeThing();
  }

  public ngOnInit() {}
}
