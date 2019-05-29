import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from './01-overview/x-01.component';

const routes: Routes = [
  {
    path: 'effects/01',
    component: X01Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EffectsRoutingModule {}
