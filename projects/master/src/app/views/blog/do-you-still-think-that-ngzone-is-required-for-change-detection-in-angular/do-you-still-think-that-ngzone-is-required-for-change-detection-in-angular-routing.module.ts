import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularComponent } from '@app/views/blog/do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular/do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular.component';

const routes: Routes = [
  {
    path: 'do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular',
    component: DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularRoutingModule {}
