// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0303RoutingModule } from './doc-03-03-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { Doc030303Component } from './03-03-03-template-driven-form/doc-03-03-03.component';
import { Doc03030301Component } from './03-03-03-template-driven-form/03-03-03-01-introduction-to-template-driven-forms/doc-03-03-03-01.component';
import { Doc030304Component } from './03-03-04-form-validation/doc-03-03-04.component';
import { Doc03030401Component } from './03-03-04-form-validation/03-03-04-01-template-driven-validation/doc-03-03-04-01.component';
import { Doc03030402Component } from './03-03-04-form-validation/03-03-04-02-reactive-form-validation/doc-03-03-04-02.component';
import { Doc03030403Component } from './03-03-04-form-validation/03-03-04-03-custom-validators/doc-03-03-04-03.component';
import { ForbiddenNameDirective } from './03-03-04-form-validation/03-03-04-03-custom-validators/validator/forbidden-name.directive';
import { Doc03030404Component } from './03-03-04-form-validation/03-03-04-04-cross-field-validation/doc-03-03-04-04.component';
import { PasswordDirective } from './03-03-04-form-validation/03-03-04-04-cross-field-validation/validator/password.directive';
import { Doc03030405Component } from './03-03-04-form-validation/03-03-04-05-async-validation/doc-03-03-04-05.component';
import { Doc030305Component } from './03-03-05-dynamic-forms/doc-03-03-05.component';
import { Doc030301Module } from './03-03-01-introduction/doc-03-03-01.module';
import { Doc030202Module } from './03-03-02-reactive-form/doc-03-02-02.module';

// tslint:enable:max-line-length

@NgModule({
  declarations: [
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
    PasswordDirective,
    Doc03030405Component,
    /* 03-03-05 */
    Doc030305Component,
  ],
  imports: [
    CommonModule,
    Doc0303RoutingModule,
    FormsModule,
    SharedModule,
    Doc030301Module,
    Doc030202Module,
  ],
  entryComponents: [],
})
export class Doc0303Module {}
