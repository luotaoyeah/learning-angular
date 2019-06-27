import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingWithDomInAngularComponent } from './working-with-dom-in-angular.component';

const routes: Routes = [
  {
    path:
      'working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques',
    component: WorkingWithDomInAngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkingWithDomInAngularRoutingModule {}
