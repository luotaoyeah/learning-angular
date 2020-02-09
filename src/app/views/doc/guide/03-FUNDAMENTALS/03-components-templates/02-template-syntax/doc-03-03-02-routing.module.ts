import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030302Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/02-template-syntax/doc-03-03-02.component';

const routes: Routes = [
  {
    path: '03/03/02',
    component: Doc030302Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030302RoutingModule {}
