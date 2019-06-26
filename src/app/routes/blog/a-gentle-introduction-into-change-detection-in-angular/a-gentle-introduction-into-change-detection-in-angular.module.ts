import { NgModule } from '@angular/core';
import { AGentleIntroductionIntoChangeDetectionInAngularRoutingModule } from './a-gentle-introduction-into-change-detection-in-angular-routing.module';
import { AGentleIntroductionIntoChangeDetectionInAngularComponent } from './a-gentle-introduction-into-change-detection-in-angular.component';
import { X01Component } from './01/x-01.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AGentleIntroductionIntoChangeDetectionInAngularComponent,
    X01Component,
  ],
  imports: [
    SharedModule,
    AGentleIntroductionIntoChangeDetectionInAngularRoutingModule,
  ],
})
export class AGentleIntroductionIntoChangeDetectionInAngularModule {}
