import { Component, OnInit } from '@angular/core';
import { Doc0307030301Service } from './service/doc-03-07-03-03-01.service';

@Component({
  selector: 'app--doc-03-07-03-03',
  templateUrl: './doc-03-07-03-03.component.html',
  providers: [
    {
      provide: Doc0307030301Service,
      /*
       * 使用 useValue 表示直接提供一个创建好的实例对象，
       * 这样，injector 就不需要再去使用 class 创建实例了，而是直接使用这个实例对象
       */
      useValue: {
        foo: 'BAR',
      },
    },
  ],
})
export class Doc03070303Component implements OnInit {
  constructor(private doc0307030301Service: Doc0307030301Service) {}

  public ngOnInit() {
    console.assert(this.doc0307030301Service.foo === 'BAR');
  }
}
