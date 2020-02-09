import { NgModule } from '@angular/core';
import { Doc030303Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-03-template-driven-form/doc-03-03-03.component';
import { Doc03030301Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-03-template-driven-form/03-03-03-01-introduction-to-template-driven-forms/doc-03-03-03-01.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [Doc030303Component, Doc03030301Component],
  imports: [SharedModule],
  exports: [Doc030303Component],
})
export class Doc030303Module {}
