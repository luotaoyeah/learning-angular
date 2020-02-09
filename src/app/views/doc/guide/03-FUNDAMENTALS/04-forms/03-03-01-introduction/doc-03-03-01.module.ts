import { NgModule } from '@angular/core';
import { Doc030301Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/doc-03-03-01.component';
import { Doc03030101Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-01-introduction/doc-03-03-01-01.component';
import { Doc03030102Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-02-key-differences/doc-03-03-01-02.component';
import { Doc03030103Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-03-common-foundation/doc-03-03-01-03.component';
import { Doc03030104Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-04-form-model-setup/doc-03-03-01-04.component';
import { Doc03030105Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-05-data-flow-in-forms/doc-03-03-01-05.component';
import { Doc0303010501Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-05-data-flow-in-forms/03-03-01-05-01-data-flow-in-reactive-form/doc-03-03-01-05-01.component';
import { Doc0303010502Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-05-data-flow-in-forms/03-03-01-05-02-data-flow-in-template-driven-form/doc-03-03-01-05-02.component';
import { Doc03030106Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-06-form-validation/doc-03-03-01-06.component';
import { Doc03030107Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-07-testing/doc-03-03-01-07.component';
import { Doc0303010701Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-07-testing/03-03-01-07-01-testing-reactive-form/doc-03-03-01-07-01.component';
import { Doc0303010702Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-07-testing/03-03-01-07-02-testing-template-driven-form/doc-03-03-01-07-02.component';
import { SharedModule } from '@app/shared';
import { Doc0303010401Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-04-form-model-setup/03-03-01-04-01/doc-03-03-01-04-01.component';
import { Doc0303010402Component } from '@app/views/doc/guide/03-FUNDAMENTALS/04-forms/03-03-01-introduction/03-03-01-04-form-model-setup/03-03-01-04-02/doc-03-03-01-04-02.component';

@NgModule({
  declarations: [
    Doc030301Component,
    Doc03030101Component,
    Doc03030102Component,
    Doc03030103Component,
    Doc03030104Component,
    Doc0303010401Component,
    Doc0303010402Component,
    Doc03030105Component,
    Doc0303010501Component,
    Doc0303010502Component,
    Doc03030106Component,
    Doc03030107Component,
    Doc0303010701Component,
    Doc0303010702Component,
  ],
  imports: [SharedModule],
  exports: [Doc030301Component],
})
export class Doc030301Module {}
