import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030307Component } from '@app/views/doc/guide/main-concepts/03-components-templates/07-dynamic-components/doc-03-03-07.component';

const routes: Routes = [
  {
    path: '03/03/07',
    component: Doc030307Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc030307RoutingModule {}
