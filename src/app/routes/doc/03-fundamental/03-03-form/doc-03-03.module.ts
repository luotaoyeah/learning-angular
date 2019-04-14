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
import { Doc0303020302Component } from './03-03-02-reactive-form/03-03-02-03-managing-control-values/03-03-02-03-02-replacing-a-form-control-value/doc-03-03-02-03-02.component';
import { Doc03030204Component } from './03-03-02-reactive-form/03-03-02-04-grouping-form-controls/doc-03-03-02-04.component';
import { Doc03030205Component } from './03-03-02-reactive-form/03-03-02-05-creating-nested-form-group/doc-03-03-02-05.component';
import { Doc03030206Component } from './03-03-02-reactive-form/03-03-02-06-partial-model-updates/doc-03-03-02-06.component';
import { Doc03030207Component } from './03-03-02-reactive-form/03-03-02-07-generating-form-controls-with-formbuilder/doc-03-03-02-07.component';
import { Doc03030208Component } from './03-03-02-reactive-form/03-03-02-08-simple-form-validation/doc-03-03-02-08.component';
import { Doc03030209Component } from './03-03-02-reactive-form/03-03-02-09-dynamic-controls-using-form-arrays/doc-03-03-02-09.component';
import { Doc030303Component } from './03-03-03-template-driven-form/doc-03-03-03.component';
import { Doc03030301Component } from './03-03-03-template-driven-form/03-03-03-01-introduction-to-template-driven-forms/doc-03-03-03-01.component';
import { Doc030304Component } from './03-03-04-form-validation/doc-03-03-04.component';
import { Doc03030401Component } from './03-03-04-form-validation/03-03-04-01-template-driven-validation/doc-03-03-04-01.component';
import { Doc03030402Component } from './03-03-04-form-validation/03-03-04-02-reactive-form-validation/doc-03-03-04-02.component';
import { Doc03030403Component } from './03-03-04-form-validation/03-03-04-03-custom-validators/doc-03-03-04-03.component';
import { ForbiddenNameDirective } from './03-03-04-form-validation/03-03-04-03-custom-validators/validator/forbidden-name.directive';
import { Doc03030404Component } from './03-03-04-form-validation/03-03-04-04-cross-field-validation/doc-03-03-04-04.component';

// tslint:enable:max-line-length

@NgModule({
  declarations: [
    /* 03-03-01 */
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
    /* 03-03-02 */
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
    /* 03-03-03 */
    Doc030303Component,
    Doc03030301Component,
    /* 03-03-04 */
    Doc030304Component,
    Doc03030401Component,
    Doc03030402Component,
    Doc03030403Component,
    ForbiddenNameDirective,
    Doc03030404Component,
  ],
  imports: [CommonModule, Doc0303RoutingModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0303Module {}
