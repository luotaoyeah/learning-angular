import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0310Component } from './doc-03-10.component';

const routes: Routes = [
  {
    path: '03/10',
    component: Doc0310Component,
    /*
     * 可以通过 data 选项, 传递业务数据
     */
    data: {
      someData: 'FOO',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0310RoutingModule {}
