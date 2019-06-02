import { NgModule } from '@angular/core';
import { Doc030303Component } from './doc-03-03-03.component';
import { Doc03030301Component } from './03-03-03-01-introduction-to-template-driven-forms/doc-03-03-03-01.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [Doc030303Component, Doc03030301Component],
  imports: [SharedModule],
  exports: [Doc030303Component],
})
export class Doc030303Module {}
