// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0303RoutingModule } from './doc-03-03-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc030301Component } from './03-03-01-introduction/doc-03-03-01.component';
import { Doc03030101Component } from './03-03-01-introduction/03-03-01-01-introduction/doc-03-03-01-01.component';

// tslint:enable:max-line-length

@NgModule({
  declarations: [Doc030301Component,Doc03030101Component],
  imports: [CommonModule, Doc0303RoutingModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0303Module {}
