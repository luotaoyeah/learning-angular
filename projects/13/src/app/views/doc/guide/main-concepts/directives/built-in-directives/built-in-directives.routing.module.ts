import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltInDirectivesComponent } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/built-in-directives.component';

const routes: Routes = [
  {
    path: 'guide/built-in-directives',
    component: BuiltInDirectivesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuiltInDirectivesRoutingModule {}
