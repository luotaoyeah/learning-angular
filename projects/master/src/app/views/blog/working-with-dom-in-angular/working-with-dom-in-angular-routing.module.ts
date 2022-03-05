import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingWithDomInAngularComponent } from '@app/views/blog/working-with-dom-in-angular/working-with-dom-in-angular.component';

const routes: Routes = [
  {
    path: 'working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques',
    component: WorkingWithDomInAngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkingWithDomInAngularRoutingModule {}
