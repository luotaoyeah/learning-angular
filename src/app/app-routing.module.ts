import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { Doc031002PreloadingStrategyService } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/services/doc-03-10-02-preloading-strategy.service';

@NgModule({
  /*
   * 如果一个 RouterModule 是用于 root module (AppModule)  的,
   * 则应该调用 RouterModule.forRoot() 方法
   */
  imports: [
    RouterModule.forRoot([], {
      /*
       * 在开发环境方便调试, 可以开启 enableTracing 选项,
       * 开启之后, 所有的路由事件都会打印到浏览器控制台
       */
      enableTracing: false,
      /*
       * 预加载的策略, angular 默认提供两种策略:
       *     PreloadAllModules:
       *         所有延迟加载的模块都要预加载,
       *         但是对于应用了 canLoad() 守护的异步路由, 不会进行预加载
       *     NoPreloading:
       *         所有延迟加载的模块都不要预加载
       *
       * 我们也可以定义自己的预加载策略
       */
      preloadingStrategy: Doc031002PreloadingStrategyService,
      /*
       * 路由默认的 URL 风格是 HTML5  风格,
       * 这种风格更加直观, 且可以跟 SSR (Server Side Rendering) 进行结合,
       * 可以通过 useHash 选项来启用 # 风格
       */
      useHash: false,
      scrollPositionRestoration: 'top',
    }),
  ],
  /*
   * 在 AppRoutingModule 中将 RouterModule 输出,
   * 这样在 AppModule 引入了 AppRoutingModule 之后,
   * AppModule 下面所有的组件中, 也都可以使用 RouterModule 中的数据
   */
  exports: [RouterModule],
})
export class AppRoutingModule {}
