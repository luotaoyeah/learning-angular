import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EverythingYouNeedToKnowAboutChangeDetectionComponent } from '@app/views/blog/everything-you-need-to-know-about-change-detection/everything-you-need-to-know-about-change-detection.component';

const routes: Routes = [
  {
    path: 'everything-you-need-to-know-about-change-detection',
    component: EverythingYouNeedToKnowAboutChangeDetectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EverythingYouNeedToKnowAboutChangeDetectionRoutingModule {}
