import { NgModule } from '@angular/core';
import { Doc09020205Component } from './doc-09-02-02-05.component';
import { SharedModule } from '@app/shared';
import { Doc090202051101Component } from './09-02-02-05-11-ng-template-outlet/doc-09-02-02-05-11-01/doc-09-02-02-05-11-01.component';
import { Doc090202051102Component } from './09-02-02-05-11-ng-template-outlet/doc-09-02-02-05-11-02/doc-09-02-02-05-11-02.component';

@NgModule({
  declarations: [
    Doc09020205Component,
    Doc090202051101Component,
    Doc090202051102Component,
  ],
  imports: [SharedModule],
  exports: [Doc09020205Component],
})
export class Doc09020205Module {}
