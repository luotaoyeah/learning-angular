import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocFundamentalComponent } from './doc-fundamental.component';
import { RoutingNavigationComponent } from './03-09-routing-navigation/routing-navigation.component';
import { DocFundamentalArchitectureComponent } from './03-01-architecture/doc-fundamental-architecture.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-01-architecture/03-01-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-01-architecture/03-01-04-di/doc-fundamental-architecture-di.component';
import { RoutingNavigationNotFoundComponent } from './03-09-routing-navigation/03-09-01-basic/routing-navigation-not-found.component';

const routes: Routes = [
  {
    path: 'doc/fundamental',
    component: DocFundamentalComponent,
    children: [
      {
        path: 'architecture',
        component: DocFundamentalArchitectureComponent,
        children: [
          {
            path: 'intro-into-component',
            component: DocFundamentalArchitectureIntroToComponentComponent
          },
          {
            path: 'di',
            component: DocFundamentalArchitectureDiComponent
          }
        ]
      },
      {
        path: 'routing-navigation/:foo',
        component: RoutingNavigationComponent,
        /*
         * 可以通过 data 选项，传递业务数据
         */
        data: {
          someData: 'FOO'
        }
      }
    ]
  },
  {
    /*
     * 通常在最后面添加一个 path 为 ** 的路由，
     * 表示，当前面的所有路由都没有匹配上时，
     * 就会匹配这个路由
     *
     * 路由的匹配是按照从上到下的顺序进行匹配的，
     * 一旦某个路由匹配上了，后面的路由就不会再继续进行匹配了
     */
    path: '**',
    component: RoutingNavigationNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocFundamentalRoutingModule {}
