import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from '@app/views/package/ngrx/effects/01-overview/x-01.component';
import { X02Component } from '@app/views/package/ngrx/effects/02-testing/x-02.component';
import { X03Component } from '@app/views/package/ngrx/effects/03-lifecycle/x-03.component';

const routes: Routes = [
  {
    path: 'effects/01',
    component: X01Component,
  },
  {
    path: 'effects/02',
    component: X02Component,
  },
  {
    path: 'effects/03',
    component: X03Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EffectsRoutingModule {}
