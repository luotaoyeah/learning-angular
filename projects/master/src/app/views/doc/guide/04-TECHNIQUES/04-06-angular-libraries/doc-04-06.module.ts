import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0406RoutingModule } from '@app/views/doc/guide/04-TECHNIQUES/04-06-angular-libraries/doc-04-06-routing.module';
import { Doc040603Component } from '@app/views/doc/guide/04-TECHNIQUES/04-06-angular-libraries/04-06-03-creating-libraries/doc-04-06-03.component';
import { TLearningAngularLibModule } from '@luotao/learning-angular-lib';

@NgModule({
  declarations: [Doc040603Component],
  imports: [Doc0406RoutingModule, SharedModule, TLearningAngularLibModule.forChild()],
})
export class Doc0406Module {}
