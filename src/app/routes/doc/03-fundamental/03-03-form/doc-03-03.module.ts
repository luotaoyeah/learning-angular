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

// tslint:enable:max-line-length

@NgModule({
  declarations: [
    Doc030301Component,
    Doc03030101Component,
    Doc03030102Component,
    Doc03030103Component,
    Doc03030104Component,
  ],
  imports: [CommonModule, Doc0303RoutingModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0303Module {}
