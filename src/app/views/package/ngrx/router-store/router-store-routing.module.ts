import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { X01Component } from './01-actions/x-01.component';
import { X02Component } from './02-configuration/x-02.component';
import { X01ResolverService } from './02-configuration/service/x-01-resolver.service';

const routes: Routes = [
  {
    path: 'router-store/01',
    component: X01Component,
  },
  {
    path: 'router-store/02',
    component: X02Component,
    resolve: {
      foo: X01ResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterStoreRoutingModule {}
