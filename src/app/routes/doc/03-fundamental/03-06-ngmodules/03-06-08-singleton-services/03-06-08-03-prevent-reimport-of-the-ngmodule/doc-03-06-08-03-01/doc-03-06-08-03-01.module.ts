import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({})
export class Doc0306080301Module {
  /*
   * 如果希望某个 NgModule 只被 AppModule 引入，
   * 可以在该 NgModule 的 constructor 中进行判断，如下：
   *     因为 parentModule 可能为空，因此添加了 @Optional 注解，表示如果找不到对应的 provider 则返回 null
   *     @SkipSelf 表示在解析 parentModule 的时候，从当前 injector 的上级开始进行解析
   * 因此，如果最后 parentModule 不为空，表示 parentModule 已经在其他的某个地方引入了
   */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: Doc0306080301Module,
  ) {
    if (parentModule) {
      console.warn(
        `${
          Doc0306080301Module.name
        } is already loaded. Import it in the AppModule only`,
      );
    }
  }
}
