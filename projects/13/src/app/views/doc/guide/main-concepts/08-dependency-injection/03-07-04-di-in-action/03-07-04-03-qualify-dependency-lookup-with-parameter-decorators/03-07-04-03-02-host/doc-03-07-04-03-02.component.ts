import { Component, Host, OnInit, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app--doc-03-07-04-03-02',
  templateUrl: './doc-03-07-04-03-02.component.html',
})
export class Doc0307040302Component implements OnInit {
  /*
   * 默认情况下, DI 会顺着 injector hierarchy tree 一直往上寻找, 直到 root injector,
   * @Host() 装饰器的作用是: 找到 host component 为止就不再继续往上寻找,
   * 什么是 host component 呢?
   * 一般来说, 当前 component 就是 host component,
   * 但是对于 projected component 来说, 它的 parent component 就是它的 host component
   */
  constructor(
    @Host()
    @Optional()
    private httpClient: HttpClient,
  ) {}

  public ngOnInit() {
    console.assert(this.httpClient === null);
  }
}
