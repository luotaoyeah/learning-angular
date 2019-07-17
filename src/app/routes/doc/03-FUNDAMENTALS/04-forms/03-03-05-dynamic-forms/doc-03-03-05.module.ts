import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030305Component } from './doc-03-03-05.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';

@NgModule({
  declarations: [Doc030305Component, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [SharedModule],
  exports: [Doc030305Component],
})
export class Doc030305Module {}
