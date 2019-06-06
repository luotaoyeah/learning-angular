import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from './01-home/x-01.component';

const routes: Routes = [
  {
    path: '01',
    component: X01Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularGridster2RoutingModule {}
