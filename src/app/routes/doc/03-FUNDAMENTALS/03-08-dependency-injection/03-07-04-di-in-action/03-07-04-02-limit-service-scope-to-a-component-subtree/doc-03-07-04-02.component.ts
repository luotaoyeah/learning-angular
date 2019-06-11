import { Component, OnInit } from '@angular/core';
import { Doc0307040201Service } from './service/doc-03-07-04-02-01.service';

@Component({
  selector: 'app-doc-03-07-04-02',
  templateUrl: './doc-03-07-04-02.component.html',
  /*
   * 通过 @Component.providers 来注册一个 provider，
   * 这个 provider 就只能在当前 component 以及它的下级 component 中注入
   */
  providers: [Doc0307040201Service],
})
export class Doc03070402Component implements OnInit {
  constructor(private doc0307040201Service: Doc0307040201Service) {}

  public ngOnInit() {
    // @ts-ignore
    window.DOC_0307040201_SERVICE = this.doc0307040201Service;
  }
}
