import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc0602Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/doc-06-02.component';

const routes: Routes = [
  {
    path: '06/02',
    component: Doc0602Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0602RoutingModule {}
