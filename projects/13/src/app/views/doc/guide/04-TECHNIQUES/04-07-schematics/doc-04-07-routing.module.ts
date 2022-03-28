import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc040703Component } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/04-07-03-schematics-for-libraries/doc-04-07-03.component';
import { Doc040701Component } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/04-07-01-schematics-overview/doc-04-07-01.component';
import { Doc040702Component } from '@app/views/doc/guide/04-TECHNIQUES/04-07-schematics/04-07-02-authoring-schematics/doc-04-07-02.component';

const routes: Routes = [
  {
    path: '04/07/01',
    component: Doc040701Component,
  },
  {
    path: '04/07/02',
    component: Doc040702Component,
  },
  {
    path: '04/07/03',
    component: Doc040703Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0407RoutingModule {}
