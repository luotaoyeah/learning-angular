import { Component, OnInit } from '@angular/core';
import { Doc0307040201Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-02-limit-service-scope-to-a-component-subtree/service/doc-03-07-04-02-01.service';

@Component({
  selector: 'app--doc-03-07-04-02-01',
  template: '',
})
export class Doc0307040201Component implements OnInit {
  constructor(private doc0307040201Service: Doc0307040201Service) {}

  public ngOnInit() {
    // @ts-ignore
    console.assert(window.DOC_0307040201_SERVICE === this.doc0307040201Service);
  }
}
