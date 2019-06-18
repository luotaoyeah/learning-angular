import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelonAbcComponent } from './delon-abc.component';

const routes: Routes = [
  {
    path: 'delon/abc',
    component: DelonAbcComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgAlainDelonAbcRoutingModule {}
