import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from '@app/views/doc/guide/main-concepts/templates/templates.component';

const routes: Routes = [
  {
    path: '03/03/02',
    component: TemplatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {}
