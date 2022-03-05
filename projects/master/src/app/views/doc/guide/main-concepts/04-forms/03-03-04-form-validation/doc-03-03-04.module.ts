import { NgModule } from '@angular/core';
import { Doc030304Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/doc-03-03-04.component';
import { Doc03030401Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-01-template-driven-validation/doc-03-03-04-01.component';
import { Doc03030402Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-02-reactive-form-validation/doc-03-03-04-02.component';
import { Doc03030403Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-03-custom-validators/doc-03-03-04-03.component';
import { ForbiddenNameDirective } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-03-custom-validators/validators/forbidden-name.directive';
import { Doc03030404Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-04-cross-field-validation/doc-03-03-04-04.component';
import { PasswordDirective } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-04-cross-field-validation/validators/password.directive';
import { Doc03030405Component } from '@app/views/doc/guide/main-concepts/04-forms/03-03-04-form-validation/03-03-04-05-async-validation/doc-03-03-04-05.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    Doc030304Component,
    Doc03030401Component,
    Doc03030402Component,
    Doc03030403Component,
    Doc03030404Component,
    Doc03030405Component,
    [ForbiddenNameDirective, PasswordDirective],
  ],
  imports: [SharedModule],
  exports: [Doc030304Component],
})
export class Doc030304Module {}
