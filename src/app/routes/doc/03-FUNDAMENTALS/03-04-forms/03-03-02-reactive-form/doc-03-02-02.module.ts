import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030302Component } from './doc-03-03-02.component';
import { Doc03030201Component } from './03-03-02-01-introduction-to-reactive-forms/doc-03-03-02-01.component';
import { Doc03030202Component } from './03-03-02-02-getting-started/doc-03-03-02-02.component';
import { Doc03030203Component } from './03-03-02-03-managing-control-values/doc-03-03-02-03.component';
import { Doc0303020301Component } from './03-03-02-03-managing-control-values/03-03-02-03-01-displaying-a-form-control-value/doc-03-03-02-03-01.component';
import { Doc0303020302Component } from './03-03-02-03-managing-control-values/03-03-02-03-02-replacing-a-form-control-value/doc-03-03-02-03-02.component';
import { Doc03030204Component } from './03-03-02-04-grouping-form-controls/doc-03-03-02-04.component';
import { Doc03030205Component } from './03-03-02-05-creating-nested-form-group/doc-03-03-02-05.component';
import { Doc03030206Component } from './03-03-02-06-partial-model-updates/doc-03-03-02-06.component';
import { Doc03030207Component } from './03-03-02-07-generating-form-controls-with-formbuilder/doc-03-03-02-07.component';
import { Doc03030208Component } from './03-03-02-08-simple-form-validation/doc-03-03-02-08.component';
import { Doc03030209Component } from './03-03-02-09-dynamic-controls-using-form-arrays/doc-03-03-02-09.component';

@NgModule({
  declarations: [
    Doc030302Component,
    Doc03030201Component,
    Doc03030202Component,
    Doc03030203Component,
    Doc0303020301Component,
    Doc0303020302Component,
    Doc03030204Component,
    Doc03030205Component,
    Doc03030206Component,
    Doc03030207Component,
    Doc03030208Component,
    Doc03030209Component,
  ],
  imports: [SharedModule],
  exports: [Doc030302Component],
})
export class Doc030202Module {}
