import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from './01-home/x-01.component';
import { X02Component } from './02-api/x-02.component';
import { X03Component } from './03-compact/x-03.component';
import { X04Component } from './04-display-grid/x-04.component';

const routes: Routes = [
  {
    path: '01',
    component: X01Component,
  },
  {
    path: '02',
    component: X02Component,
  },
  {
    path: '03',
    component: X03Component,
  },
  {
    path: '04',
    component: X04Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularGridster2RoutingModule {}
