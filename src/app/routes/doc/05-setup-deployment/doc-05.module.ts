import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Doc05Component } from './doc-05.component';
import { Doc05RoutingModule } from './doc-05-routing.module';
import { Doc050701Component } from './05-07-testing/05-07-01-setup/doc-05-07-01.component';
import { SharedModule } from '@shared';
import { Doc0507Component } from './05-07-testing/doc-05-07.component';

@NgModule({
  declarations: [Doc05Component, Doc0507Component, Doc050701Component],
  imports: [CommonModule, FormsModule, SharedModule, Doc05RoutingModule],
})
export class Doc05Module {}
