import { NgModule } from '@angular/core';
import { Doc09020205Component } from './doc-09-02-02-05.component';
import { SharedModule } from '@app/shared';
import { Doc0902020511Component } from './09-02-02-05-11-ng-template-outlet/doc-09-02-02-05-11.component';

@NgModule({
  declarations: [Doc09020205Component, Doc0902020511Component],
  imports: [SharedModule],
  exports: [Doc09020205Component],
})
export class Doc09020205Module {}
