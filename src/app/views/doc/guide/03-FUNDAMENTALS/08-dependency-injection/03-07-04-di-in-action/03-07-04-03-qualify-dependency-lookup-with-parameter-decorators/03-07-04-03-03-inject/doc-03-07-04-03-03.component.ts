import { Component, Inject, OnInit } from '@angular/core';
import { TOKEN } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-03-inject/service/doc-03-07-04-03-03.service';

@Component({
  selector: 'app--doc-03-07-04-03-03',
  templateUrl: './doc-03-07-04-03-03.component.html',
})
export class Doc0307040303Component implements OnInit {
  /*
   * 当我们使用 constructor parameter property 声明一个依赖时，DI 怎么知道该去寻找哪个 provider？
   * 对于一般的 service 来说，因为它的 provider 就是它自己的 service class，
   * 因此 DI 通过参数类型，就可以直接根据这个类型对应的 service class 去寻找对应的 provider，
   * 但是如果依赖的不是一个 service，而是一个其他类型的数据呢？比如 object/functon 等等，
   * 这时候就需要我们手动通过 @Inject() 装饰器来指定 token，
   * 即，@Inject() 的作用就是用来显式地指定 injection token
   */
  constructor(@Inject(TOKEN) private storage: Storage) {}

  public ngOnInit() {
    console.assert(this.storage === window.localStorage);
  }
}
