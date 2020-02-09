import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc040603Component } from '@app/views/doc/guide/04-TECHNIQUES/04-06-angular-libraries/04-06-03-creating-libraries/doc-04-06-03.component';

const routes: Routes = [
  {
    path: '04/06/03',
    component: Doc040603Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0406RoutingModule {}
