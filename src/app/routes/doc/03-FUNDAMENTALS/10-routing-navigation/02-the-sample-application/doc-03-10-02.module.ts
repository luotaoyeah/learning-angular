import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@app/shared';
import { Doc031002Component } from './doc-03-10-02.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { Doc031002RoutingModule } from './doc-03-10-02-routing.module';

@NgModule({
  declarations: [Doc031002Component, ComposeMessageComponent],
  imports: [SharedModule, Doc031002RoutingModule],
})
export class Doc031002Module {
  constructor(router: Router) {
    /*
     * 通过 Router.config 属性, 可以获取应用整个的路由配置信息,
     * 包含了所有的 feature module 中的路由配置,
     * 但是没有包含尚未加载的 asynchronous feature module 的
     */

    (window as any).__ROUTE_CONFIG__ = router.config;
  }
}
