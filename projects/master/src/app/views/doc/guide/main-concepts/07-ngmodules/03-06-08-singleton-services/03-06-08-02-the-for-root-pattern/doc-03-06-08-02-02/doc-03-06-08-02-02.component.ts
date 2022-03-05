import { Component, OnInit } from '@angular/core';
import { Doc0306080201Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/service/doc-03-06-08-02-01.service';

@Component({
  selector: 'app--doc-03-06-08-02-02',
  templateUrl: './doc-03-06-08-02-02.component.html',
})
export class Doc0306080202Component implements OnInit {
  constructor(private doc0306080201Service: Doc0306080201Service) {}

  public ngOnInit() {
    // @ts-ignore
    window.DOC_0306080201_SERVICE_02 = this.doc0306080201Service;
  }
}
