import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AGentleIntroductionIntoChangeDetectionInAngularComponent } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/a-gentle-introduction-into-change-detection-in-angular.component';

const routes: Routes = [
  {
    path: 'a-gentle-introduction-into-change-detection-in-angular',
    component: AGentleIntroductionIntoChangeDetectionInAngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AGentleIntroductionIntoChangeDetectionInAngularRoutingModule {}
