import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030211Component } from '@app/views/doc/guide/main-concepts/03-components-templates/11-pipes/doc-03-02-11.component';

const routes: Routes = [
  {
    path: '03/03/11',
    component: Doc030211Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030211RoutingModule {}
