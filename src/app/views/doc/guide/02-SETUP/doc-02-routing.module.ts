import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc02Component } from '@app/views/doc/guide/02-SETUP/doc-02.component';

const routes: Routes = [
  {
    path: '02',
    component: Doc02Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc02RoutingModule {}
