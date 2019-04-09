// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0303RoutingModule } from './doc-03-03-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc030301Component } from './03-03-01-introduction/doc-03-03-01.component';
import { Doc03030101Component } from './03-03-01-introduction/03-03-01-01-introduction/doc-03-03-01-01.component';
import { Doc03030102Component } from './03-03-01-introduction/03-03-01-02-key-differences/doc-03-03-01-02.component';
import { Doc03030103Component } from './03-03-01-introduction/03-03-01-03-common-foundation/doc-03-03-01-03.component';
import { Doc03030104Component } from './03-03-01-introduction/03-03-01-04-form-model-setup/doc-03-03-01-04.component';
import { Doc03030105Component } from './03-03-01-introduction/03-03-01-05-data-flow-in-forms/doc-03-03-01-05.component';
import { Doc0303010501Component } from './03-03-01-introduction/03-03-01-05-data-flow-in-forms/03-03-01-05-01-data-flow-in-reactive-form/doc-03-03-01-05-01.component';
import { Doc0303010502Component } from './03-03-01-introduction/03-03-01-05-data-flow-in-forms/03-03-01-05-02-data-flow-in-template-driven-form/doc-03-03-01-05-02.component';
import { Doc03030106Component } from './03-03-01-introduction/03-03-01-06-form-validation/doc-03-03-01-06.component';
import { Doc03030107Component } from './03-03-01-introduction/03-03-01-07-testing/doc-03-03-01-07.component';
import { Doc0303010702Component } from './03-03-01-introduction/03-03-01-07-testing/03-03-01-07-02-testing-template-driven-form/doc-03-03-01-07-02.component';
import { Doc0303010701Component } from './03-03-01-introduction/03-03-01-07-testing/03-03-01-07-01-testing-reactive-form/doc-03-03-01-07-01.component';
import { Doc030302Component } from './03-03-02-reactive-form/doc-03-03-02.component';
import { Doc03030201Component } from './03-03-02-reactive-form/03-03-02-01-introduction-to-reactive-forms/doc-03-03-02-01.component';
import { Doc03030202Component } from './03-03-02-reactive-form/03-03-02-02-getting-started/doc-03-03-02-02.component';
import { Doc03030203Component } from './03-03-02-reactive-form/03-03-02-03-managing-control-values/doc-03-03-02-03.component';
import { Doc0303020301Component } from './03-03-02-reactive-form/03-03-02-03-managing-control-values/03-03-02-03-01-displaying-a-form-control-value/doc-03-03-02-03-01.component';

// tslint:enable:max-line-length

@NgModule({
  declarations: [
    /* 03-02-01 */
    Doc030301Component,
    Doc03030101Component,
    Doc03030102Component,
    Doc03030103Component,
    Doc03030104Component,
    Doc03030105Component,
    Doc0303010501Component,
    Doc0303010502Component,
    Doc03030106Component,
    Doc03030107Component,
    Doc0303010701Component,
    Doc0303010702Component,
    /* 03-02-02 */
    Doc030302Component,
    Doc03030201Component,
    Doc03030202Component,
    Doc03030203Component,
    Doc0303020301Component,
  ],
  imports: [CommonModule, Doc0303RoutingModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0303Module {}
