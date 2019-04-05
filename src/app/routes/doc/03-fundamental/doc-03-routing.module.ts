import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc03Component } from './doc-03.component';
import { Doc0309Component } from './03-09-routing-navigation/doc-03-09.component';
import { Doc0301Component } from './03-01-architecture/doc-03-01.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-01-architecture/03-01-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-01-architecture/03-01-04-di/doc-fundamental-architecture-di.component';

const routes: Routes = [
  {
    path: '03',
    component: Doc03Component,
    children: [
      {
        path: '01',
        component: Doc0301Component,
        children: [
          {
            path: 'intro-into-component',
            component: DocFundamentalArchitectureIntroToComponentComponent,
          },
          {
            path: 'di',
            component: DocFundamentalArchitectureDiComponent,
          },
        ],
      },
      {
        path: '09',
        component: Doc0309Component,
        /*
         * 可以通过 data 选项，传递业务数据
         */
        data: {
          someData: 'FOO',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc03RoutingModule {}
