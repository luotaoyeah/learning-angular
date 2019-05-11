import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0502RoutingModule } from './doc-05-02-routing.module';
import { Doc0502Component } from './doc-05-02.component';
import { Doc050201Component } from './05-02-01-overall-json-structure/doc-05-02-01.component';

@NgModule({
  declarations: [Doc0502Component, Doc050201Component],
  imports: [CommonModule, FormsModule, SharedModule, Doc0502RoutingModule],
})
export class Doc0502Module {}
