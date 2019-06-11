import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './comn/page-not-found/page-not-found.component';
// tslint:disable-next-line:max-line-length
import { SelectivePreloadingStrategyService } from './routes/doc/03-FUNDAMENTALS/03-10-routing-navigation/03-09-02-sample-application/service/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    /*
     * 如果浏览器当前路径跟上面的 path 相匹配,
     * 则跳转到 redirectTo 指定的路径,
     *
     * redirectTo 指定的路径可以是绝对路径 (以 / 开头),
     * 也可以是相对路径 (不以 / 开头), 此时是相对于上面的 path 指定的路径
     */
    redirectTo: '/doc/fundamental/routing/sample-application/superheroes',
    /*
     * 路径匹配策略, 有两种方式:
     *     prefix (默认) : 前缀匹配
     *     full: 完全匹配
     */
    pathMatch: 'full',
  },
  /*
   * 通常在最后面添加一个 path 为 ** 的路由 (wildcard route),
   * 表示, 如果这之前的所有路由都没有匹配上时, 就会匹配这个路由
   */
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  /*
   * 如果一个 RouterModule 是用于 root module (AppModule)  的,
   * 则应该调用 RouterModule.forRoot() 方法
   */
  imports: [
    RouterModule.forRoot(routes, {
      /*
       * 在开发环境方便调试, 可以开启 enableTracing 选项,
       * 开启之后, 所有的路由事件都会打印到浏览器控制台
       */
      enableTracing: false,
      /*
       * 预加载的策略,
       * angular 默认提供两种策略:
       *     PreloadAllModules (所有延迟加载的模块都要预加载)
       *     NoPreloading (所有延迟加载的模块都不要预加载)
       */
      preloadingStrategy: SelectivePreloadingStrategyService,
      /*
       * 路由默认的 URL 风格是 HTML5  风格,
       * 这种风格更加直观, 且可以跟 SSR (Server Side Rendering)  进行结合,
       * 可以通过 useHash 选项来启用 # 风格
       */
      useHash: false,
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
