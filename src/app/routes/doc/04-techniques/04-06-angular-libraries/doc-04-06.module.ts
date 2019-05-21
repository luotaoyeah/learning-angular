import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Doc0406RoutingModule } from './doc-04-06-routing.module';
import { Doc040603Component } from './04-06-03-creating-libraries/doc-04-06-03.component';
import { LearningAngularLibModule } from '@luotao/learning-angular-lib';

@NgModule({
  declarations: [Doc040603Component],
  imports: [Doc0406RoutingModule, SharedModule, LearningAngularLibModule],
})
export class Doc0406Module {}
