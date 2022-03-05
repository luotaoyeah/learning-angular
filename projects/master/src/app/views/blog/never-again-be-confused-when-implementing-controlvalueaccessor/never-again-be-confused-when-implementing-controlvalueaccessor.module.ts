import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NeverAgainBeConfusedWhenImplementingControlvalueaccessorRoutingModule } from '@app/views/blog/never-again-be-confused-when-implementing-controlvalueaccessor/never-again-be-confused-when-implementing-controlvalueaccessor-routing.module';
import { NeverAgainBeConfusedWhenImplementingControlvalueaccessorComponent } from '@app/views/blog/never-again-be-confused-when-implementing-controlvalueaccessor/never-again-be-confused-when-implementing-controlvalueaccessor.component';
import { TLearningAngularLibModule } from '@luotao/learning-angular-lib';

@NgModule({
  declarations: [NeverAgainBeConfusedWhenImplementingControlvalueaccessorComponent],
  imports: [
    CommonModule,
    NeverAgainBeConfusedWhenImplementingControlvalueaccessorRoutingModule,
    SharedModule,
    TLearningAngularLibModule.forChild(),
  ],
})
export class NeverAgainBeConfusedWhenImplementingControlvalueaccessorModule {}
