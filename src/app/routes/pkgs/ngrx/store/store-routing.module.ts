import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { X01Component } from './01-getting-started/x-01.component';

const routes: Routes = [
  {
    path: 'store/01',
    component: X01Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
