import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030305Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/doc-03-03-05.component';
import { DynamicFormComponent } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/dynamic-form/dynamic-form-question.component';

@NgModule({
  declarations: [Doc030305Component, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [SharedModule],
  exports: [Doc030305Component],
})
export class Doc030305Module {}
