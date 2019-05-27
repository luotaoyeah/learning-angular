import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from './01-getting-started/x-01.component';
import { X02Component } from './02-architecture/x-02.component';

const routes: Routes = [
  {
    path: 'store/01',
    component: X01Component,
  },
  {
    path: 'store/02',
    component: X02Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
