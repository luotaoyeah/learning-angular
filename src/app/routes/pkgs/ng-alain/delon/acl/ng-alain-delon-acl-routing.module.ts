import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelonAclComponent } from './delon-acl.component';

const routes: Routes = [
  {
    path: 'delon/acl',
    component: DelonAclComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgAlainDelonAclRoutingModule {}
