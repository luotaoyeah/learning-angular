import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchematicsComponent } from '@app/views/package/ngrx/schematics/schematics.component';

const routes: Routes = [
  {
    path: 'schematics/01',
    component: SchematicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchematicsRoutingModule {}
