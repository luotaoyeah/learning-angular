import { Component, OnInit } from '@angular/core';
import { Doc0306080201Service } from '../doc-03-06-08-02-01/service/doc-03-06-08-02-01.service';

@Component({
  selector: 'app-doc-03-06-08-02-03',
  templateUrl: './doc-03-06-08-02-03.component.html',
})
export class Doc0306080203Component implements OnInit {
  constructor(private doc0306080201Service: Doc0306080201Service) {}

  ngOnInit() {
    // @ts-ignore
    window.DOC_0306080201_SERVICE_03 = this.doc0306080201Service;

    console.assert(
      // @ts-ignore
      window.DOC_0306080201_SERVICE_01 === window.DOC_0306080201_SERVICE_02,
    );

    console.assert(
      // @ts-ignore
      window.DOC_0306080201_SERVICE_01 === window.DOC_0306080201_SERVICE_03,
    );

    this.doc0306080201Service.doSomething();
  }
}