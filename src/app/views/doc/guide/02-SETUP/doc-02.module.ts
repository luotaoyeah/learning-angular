import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc02Component } from '@app/views/doc/guide/02-SETUP/doc-02.component';
import { Doc02RoutingModule } from '@app/views/doc/guide/02-SETUP/doc-02-routing.module';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [Doc02Component],
  imports: [CommonModule, Doc02RoutingModule, SharedModule],
})
export class Doc02Module {}
