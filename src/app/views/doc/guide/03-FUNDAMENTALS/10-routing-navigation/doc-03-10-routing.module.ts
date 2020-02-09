import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0310Component } from './doc-03-10.component';
import { Doc03100108Component } from './01-the-basics/03-10-01-08/doc-03-10-01-08.component';

const routes: Routes = [
  {
    path: '03/10',
    component: Doc0310Component,
    children: [
      {
        path: '01/08/:foo',
        component: Doc03100108Component,
        /*
         * 可以通过 data 选项, 传递静态数据
         */
        data: {
          foo: 'FOO',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0310RoutingModule {}
