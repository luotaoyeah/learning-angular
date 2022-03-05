import { Component, OnInit } from '@angular/core';
import { Doc03060801Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-01-providing-a-singleton-service/service/doc-03-06-08-01.service';
import { Doc03060802Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-01-providing-a-singleton-service/service/doc-03-06-08-02.service';

@Component({
  selector: 'app--doc-03-06-08-01',
  templateUrl: './doc-03-06-08-01.component.html',
})
export class Doc03060801Component implements OnInit {
  constructor(private doc03060801Service: Doc03060801Service, private doc03060802Service: Doc03060802Service) {}

  public ngOnInit() {
    /*
     * 使用 providedIn: 'root' 声明的 service 是 singleton 的，
     * 在 AppModule 的 providers 中声明的 service 也是 singleton 的，
     * 整个应用中任何地方注入的都是同一个对象实例
     */
    // @ts-ignore
    console.assert(window._DOC_03060801_SERVICE === this.doc03060801Service);
    // @ts-ignore
    console.assert(window._DOC_03060802_SERVICE === this.doc03060802Service);
  }
}
