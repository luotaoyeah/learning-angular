import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeverAgainBeConfusedWhenImplementingControlvalueaccessorRoutingModule } from './never-again-be-confused-when-implementing-controlvalueaccessor-routing.module';
import { NeverAgainBeConfusedWhenImplementingControlvalueaccessorComponent } from './never-again-be-confused-when-implementing-controlvalueaccessor.component';
import { SharedModule } from '@app/shared';
import { LearningAngularLibModule } from '@luotao/learning-angular-lib';

@NgModule({
  declarations: [
    NeverAgainBeConfusedWhenImplementingControlvalueaccessorComponent,
  ],
  imports: [
    CommonModule,
    NeverAgainBeConfusedWhenImplementingControlvalueaccessorRoutingModule,
    SharedModule,
    LearningAngularLibModule,
  ],
})
export class NeverAgainBeConfusedWhenImplementingControlvalueaccessorModule {}
