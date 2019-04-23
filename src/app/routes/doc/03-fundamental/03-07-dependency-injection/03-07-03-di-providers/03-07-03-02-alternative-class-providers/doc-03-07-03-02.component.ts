import { Component, OnInit } from '@angular/core';
import { Doc0307030201Service } from './service/doc-03-07-03-02-01.service';
import { Doc0307030202Service } from './service/doc-03-07-03-02-02.service';
import { Doc0307030203Service } from './service/doc-03-07-03-02-03.service';
import { Doc0307030204Service } from './service/doc-03-07-03-02-04.service';

@Component({
  selector: 'app-doc-03-07-03-02',
  templateUrl: './doc-03-07-03-02.component.html',
  providers: [
    {
      provide: Doc0307030201Service,
      /*
       * 可以通过 useClass，给某个 service 注入不同的实现类，
       * 通常这些实现类实现了相同的接口，提供了相同的功能，但是具体的实现不同
       */
      useClass: Doc0307030202Service,
    },
    /*
     * 如果两个不同的 token，都用 useClass 指定了同一个 service class，
     * 则给它们注入的是两个不同的 service 实例，
     * 如果希望它们共享同一个 service 实例，
     * 后面的 provider 需要使用 useExisting 而不是 useClass
     */
    {
      provide: Doc0307030204Service,
      useClass: Doc0307030204Service,
    },
    {
      provide: Doc0307030203Service,
      useExisting: Doc0307030204Service,
    },
  ],
})
export class Doc03070302Component implements OnInit {
  constructor(
    private doc0307030201Service: Doc0307030201Service,
    private doc0307030203Service: Doc0307030203Service,
    private doc0307030204Service: Doc0307030204Service,
  ) {}

  ngOnInit() {
    this.doc0307030201Service.doSomething();
    console.assert(this.doc0307030203Service === this.doc0307030204Service);
  }
}
