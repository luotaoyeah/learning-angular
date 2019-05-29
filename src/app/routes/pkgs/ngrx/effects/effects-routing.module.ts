import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from './01-overview/x-01.component';
import { X02Component } from './02-testing/x-02.component';

const routes: Routes = [
  {
    path: 'effects/01',
    component: X01Component,
  },
  {
    path: 'effects/02',
    component: X02Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EffectsRoutingModule {}
