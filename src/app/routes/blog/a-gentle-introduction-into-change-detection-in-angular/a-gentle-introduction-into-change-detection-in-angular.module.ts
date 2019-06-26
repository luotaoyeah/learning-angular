import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AGentleIntroductionIntoChangeDetectionInAngularRoutingModule } from './a-gentle-introduction-into-change-detection-in-angular-routing.module';
import { AGentleIntroductionIntoChangeDetectionInAngularComponent } from './a-gentle-introduction-into-change-detection-in-angular.component';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';
import { X03Component } from './03/x-03.component';
import { X04Component } from './04/x-04.component';

@NgModule({
  declarations: [
    AGentleIntroductionIntoChangeDetectionInAngularComponent,
    X01Component,
    X02Component,
    X03Component,
    X04Component,
  ],
  imports: [
    SharedModule,
    AGentleIntroductionIntoChangeDetectionInAngularRoutingModule,
  ],
})
export class AGentleIntroductionIntoChangeDetectionInAngularModule {}
