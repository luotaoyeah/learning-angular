import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc090102Component } from '@app/views/doc/guide/09-API/09-01-core/09-01-02-primary-entry-point-exports/doc-09-01-02.component';
import { Doc090101Component } from '@app/views/doc/guide/09-API/09-01-core/09-01-01-entry-points/doc-09-01-01.component';

const routes: Routes = [
  {
    path: '09/01/01',
    component: Doc090101Component,
  },
  {
    path: '09/01/02',
    component: Doc090102Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0901RoutingModule {}
