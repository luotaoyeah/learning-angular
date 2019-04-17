import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0305RoutingModule } from './doc-03-05-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0305Component } from './doc-03-05.component';

@NgModule({
  declarations: [Doc0305Component],
  imports: [Doc0305RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0305Module {}
