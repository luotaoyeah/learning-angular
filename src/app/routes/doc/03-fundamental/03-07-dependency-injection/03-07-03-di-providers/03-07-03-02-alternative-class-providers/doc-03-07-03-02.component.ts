import { Component, OnInit } from '@angular/core';
import { Doc0307030201Service } from './service/doc-03-07-03-02-01.service';
import { Doc0307030202Service } from './service/doc-03-07-03-02-02.service';

@Component({
  selector: 'app-doc-03-07-03-02',
  templateUrl: './doc-03-07-03-02.component.html',
  providers: [
    {
      provide: Doc0307030201Service,
      /*
       * 可以通过 useClass，给某个 service 注入不同的实现类，
       * 通常这些实现类实现了相同的接口，提供了相同的功能，但是具体实现不同
       */
      useClass: Doc0307030202Service,
    },
  ],
})
export class Doc03070302Component implements OnInit {
  constructor(private doc0307030201Service: Doc0307030201Service) {}

  ngOnInit() {
    this.doc0307030201Service.doSomething();
  }
}
