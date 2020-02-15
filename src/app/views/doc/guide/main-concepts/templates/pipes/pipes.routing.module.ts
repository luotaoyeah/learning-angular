import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from '@app/views/doc/guide/main-concepts/templates/pipes/pipes.component';

const routes: Routes = [
  {
    path: 'guide/pipes',
    component: PipesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesRoutingModule {}
