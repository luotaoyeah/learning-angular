import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { Doc09RoutingModule } from '@app/views/doc/guide/09-API/doc-09-routing.module';
import { Doc0901Module } from '@app/views/doc/guide/09-API/09-01-core/doc-09-01.module';
import { Doc0902Module } from '@app/views/doc/guide/09-API/09-02-common/doc-09-02.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Doc09RoutingModule,
    Doc0901Module,
    Doc0902Module,
  ],
})
export class Doc09Module {}
