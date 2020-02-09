import { Component, OnInit } from '@angular/core';
import { Doc030702010301Service } from './service/doc-03-07-02-01-03-01.service';
import { Doc030702010302ervice } from './service/doc-03-07-02-01-03-02.service';

/*
 * 通过 @Component.providers 配置的 providers，只能在当前 component 以及它的下级 component 中使用，
 * 并且每个该 component 的实例会创建属于它自己的 injector，以及里面的 service 实例
 */
@Component({
  selector: 'app--doc-03-07-02-01-03',
  templateUrl: './doc-03-07-02-01-03.component.html',
  providers: [Doc030702010301Service, Doc030702010302ervice],
})
export class Doc0307020103Component implements OnInit {
  constructor(
    private doc030702010301Service: Doc030702010301Service,
    private doc030702010302ervice: Doc030702010302ervice,
  ) {}

  public ngOnInit() {
    if (
      // @ts-ignore
      window.DOC_030702010301_SERVICES &&
      // @ts-ignore
      Array.isArray(window.DOC_030702010301_SERVICES)
    ) {
      // @ts-ignore
      window.DOC_030702010301_SERVICES.push(this.doc030702010301Service);
    } else {
      // @ts-ignore
      window.DOC_030702010301_SERVICES = [this.doc030702010301Service];
    }

    this.doc030702010302ervice.doSomething(Doc0307020103Component.name);
  }
}
