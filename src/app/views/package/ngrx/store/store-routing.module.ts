import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from '@app/views/package/ngrx/store/01-getting-started/x-01.component';
import { X02Component } from '@app/views/package/ngrx/store/02-architecture/x-02.component';
import { X03Component } from '@app/views/package/ngrx/store/03-advanced/x-03.component';
import { X04Component } from '@app/views/package/ngrx/store/04-recipes/x-04.component';
import { X05Component } from '@app/views/package/ngrx/store/05-testing/x-05.component';

const routes: Routes = [
  {
    path: 'store/01',
    component: X01Component,
  },
  {
    path: 'store/02',
    component: X02Component,
  },
  {
    path: 'store/03',
    component: X03Component,
  },
  {
    path: 'store/04',
    component: X04Component,
  },
  {
    path: 'store/05',
    component: X05Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
