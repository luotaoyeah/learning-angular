import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0304RoutingModule } from './doc-03-04-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc030401Component } from './03-04-01-observables/doc-03-04-01.component';

@NgModule({
  declarations: [Doc030401Component],
  imports: [Doc0304RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0304Module {}
