import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AGentleIntroductionIntoChangeDetectionInAngularRoutingModule } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/a-gentle-introduction-into-change-detection-in-angular-routing.module';
import { AGentleIntroductionIntoChangeDetectionInAngularComponent } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/a-gentle-introduction-into-change-detection-in-angular.component';
import { X01Component } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/01/x-01.component';
import { X02Component } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/02/x-02.component';
import { X03Component } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/03/x-03.component';
import { X04Component } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/04/x-04.component';
import { X05Component } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/05/x-05.component';
import { X0501Component } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/05/05-01/x-05-01.component';

@NgModule({
  declarations: [
    AGentleIntroductionIntoChangeDetectionInAngularComponent,
    X01Component,
    X02Component,
    X03Component,
    X04Component,
    X05Component,
    X0501Component,
  ],
  imports: [SharedModule, AGentleIntroductionIntoChangeDetectionInAngularRoutingModule],
})
export class AGentleIntroductionIntoChangeDetectionInAngularModule {}
