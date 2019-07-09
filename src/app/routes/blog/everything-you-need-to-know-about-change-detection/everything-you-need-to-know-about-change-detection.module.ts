import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { EverythingYouNeedToKnowAboutChangeDetectionRoutingModule } from './everything-you-need-to-know-about-change-detection-routing.module';
import { EverythingYouNeedToKnowAboutChangeDetectionComponent } from './everything-you-need-to-know-about-change-detection.component';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';

@NgModule({
  declarations: [
    EverythingYouNeedToKnowAboutChangeDetectionComponent,
    X01Component,
    X02Component,
  ],
  imports: [
    EverythingYouNeedToKnowAboutChangeDetectionRoutingModule,
    SharedModule,
  ],
})
export class EverythingYouNeedToKnowAboutChangeDetectionModule {}
