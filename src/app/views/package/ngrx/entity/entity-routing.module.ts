import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from './01-entity-interfaces/x-01.component';
import { X02Component } from './02-entity-adapter/x-02.component';

const routes: Routes = [
  {
    path: 'entity/01',
    component: X01Component,
  },
  {
    path: 'entity/02',
    component: X02Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityRoutingModule {}
