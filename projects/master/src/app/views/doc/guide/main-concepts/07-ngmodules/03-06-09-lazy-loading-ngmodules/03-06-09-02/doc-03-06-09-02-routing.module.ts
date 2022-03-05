import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc03060902Component } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-09-lazy-loading-ngmodules/03-06-09-02/doc-03-06-09-02.component';

const routes: Routes = [
  {
    path: '',
    component: Doc03060902Component,
    data: { title: '02' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc03060902RoutingModule {}
