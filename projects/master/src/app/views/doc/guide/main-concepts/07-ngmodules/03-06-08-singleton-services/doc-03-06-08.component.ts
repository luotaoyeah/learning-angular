import { Component, OnInit } from '@angular/core';
import { Doc03060801Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-01-providing-a-singleton-service/service/doc-03-06-08-01.service';
import { Doc03060802Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-01-providing-a-singleton-service/service/doc-03-06-08-02.service';

@Component({
  selector: 'app--doc-03-06-08',
  templateUrl: './doc-03-06-08.component.html',
})
export class Doc030608Component implements OnInit {
  constructor(private doc03060801Service: Doc03060801Service, private doc03060802Service: Doc03060802Service) {}

  public ngOnInit() {
    // @ts-ignore
    window._DOC_03060801_SERVICE = this.doc03060801Service;
    // @ts-ignore
    window._DOC_03060802_SERVICE = this.doc03060802Service;
  }
}
