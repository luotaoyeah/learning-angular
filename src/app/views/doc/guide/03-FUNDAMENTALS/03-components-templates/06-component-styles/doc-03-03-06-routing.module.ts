import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030306Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/06-component-styles/doc-03-03-06.component';

const routes: Routes = [
  {
    path: '03/03/06',
    component: Doc030306Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030306RoutingModule {}
