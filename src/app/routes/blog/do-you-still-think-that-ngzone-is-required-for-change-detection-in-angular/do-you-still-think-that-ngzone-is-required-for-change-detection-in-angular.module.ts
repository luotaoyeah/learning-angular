import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularRoutingModule } from './do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular-routing.module';
import { DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularComponent } from './do-you-still-think-that-ngzone-is-required-for-change-detection-in-angular.component';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';
import { X03Component } from './03/x-03.component';

@NgModule({
  declarations: [
    DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularComponent,
    X01Component,
    X02Component,
    X03Component,
  ],
  imports: [
    DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularRoutingModule,
    SharedModule,
  ],
})
export class DoYouStillThinkThatNgzoneIsRequiredForChangeDetectionInAngularModule {}
