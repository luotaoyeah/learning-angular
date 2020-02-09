import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0602Module } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/doc-06-02.module';

@NgModule({
  imports: [SharedModule, Doc0602Module],
})
export class Doc06Module {}
