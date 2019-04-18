import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0308RoutingModule } from './doc-03-08-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0308Component } from './doc-03-08.component';

@NgModule({
  declarations: [Doc0308Component],
  imports: [Doc0308RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0308Module {}
