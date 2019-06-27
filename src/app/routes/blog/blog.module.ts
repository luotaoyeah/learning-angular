import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComprehensiveGuideToAngularOnpushModule } from './a-comprehensive-guide-to-angular-onpush/a-comprehensive-guide-to-angular-onpush.module';
import { NeverAgainBeConfusedWhenImplementingControlvalueaccessorModule } from './never-again-be-confused-when-implementing-controlvalueaccessor/never-again-be-confused-when-implementing-controlvalueaccessor.module';
import { AGentleIntroductionIntoChangeDetectionInAngularModule } from './a-gentle-introduction-into-change-detection-in-angular/a-gentle-introduction-into-change-detection-in-angular.module';
import { WorkingWithDomInAngularModule } from './working-with-dom-in-angular/working-with-dom-in-angular.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AComprehensiveGuideToAngularOnpushModule,
    NeverAgainBeConfusedWhenImplementingControlvalueaccessorModule,
    AGentleIntroductionIntoChangeDetectionInAngularModule,
    WorkingWithDomInAngularModule,
  ],
})
export class BlogModule {}
