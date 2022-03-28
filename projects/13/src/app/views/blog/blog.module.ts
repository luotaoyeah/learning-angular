import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComprehensiveGuideToAngularOnpushModule } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/a-comprehensive-guide-to-angular-onpush.module';
import { NeverAgainBeConfusedWhenImplementingControlvalueaccessorModule } from '@app/views/blog/never-again-be-confused-when-implementing-controlvalueaccessor/never-again-be-confused-when-implementing-controlvalueaccessor.module';
import { AGentleIntroductionIntoChangeDetectionInAngularModule } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/a-gentle-introduction-into-change-detection-in-angular.module';
import { WorkingWithDomInAngularModule } from '@app/views/blog/working-with-dom-in-angular/working-with-dom-in-angular.module';
import { HereIsWhatYouNeedToKnowAboutDynamicComponentsModule } from '@app/views/blog/here-is-what-you-need-to-know-about-dynamic-components/here-is-what-you-need-to-know-about-dynamic-components.module';
import { DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularModule } from '@app/views/blog/do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular/do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular.module';
import { EverythingYouNeedToKnowAboutChangeDetectionModule } from '@app/views/blog/everything-you-need-to-know-about-change-detection/everything-you-need-to-know-about-change-detection.module';
import { BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionModule } from '@app/views/blog/boosting-performance-of-angular-applications-with-manual-change-detection/boosting-performance-of-angular-applications-with-manual-change-detection.module';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedModule } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/if-you-think-ngdocheck-means-your-component-is-being-checked.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AComprehensiveGuideToAngularOnpushModule,
    NeverAgainBeConfusedWhenImplementingControlvalueaccessorModule,
    AGentleIntroductionIntoChangeDetectionInAngularModule,
    WorkingWithDomInAngularModule,
    HereIsWhatYouNeedToKnowAboutDynamicComponentsModule,
    DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularModule,
    EverythingYouNeedToKnowAboutChangeDetectionModule,
    BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionModule,
    IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedModule,
  ],
})
export class BlogModule {}
