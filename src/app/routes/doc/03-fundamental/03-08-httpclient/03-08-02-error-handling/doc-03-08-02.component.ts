import { Component, OnInit } from '@angular/core';
import { Doc030802Service } from './service/doc-03-08-02.service';
import { IConfig } from './model/IConfig';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doc-03-08-02',
  templateUrl: './doc-03-08-02.component.html',
})
export class Doc030802Component implements OnInit {
  public config: IConfig = {
    heroesUrl: '',
    textfile: '',
  };

  constructor(private doc030802Service: Doc030802Service) {}

  public ngOnInit() {}

  public request() {
    this.doc030802Service.getConfig().subscribe(
      (config: IConfig) => {
        this.config = config;
      },
      /*
       * 通过 Observable.subscribe() 方法的第二个参数，可以指定一个错误处理函数，
       * 当请求出错时，该错误处理函数就会执行
       */
      (e: HttpErrorResponse) => {
        console.assert(e.status === 404);
      },
    );
  }
}
