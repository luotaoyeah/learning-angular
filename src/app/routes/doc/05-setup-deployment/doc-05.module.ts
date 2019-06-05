import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { Doc0502Module } from './05-02-workspace-config/doc-05-02.module';
import { Doc0507Module } from './05-07-testing/doc-05-07.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Doc0502Module,
    Doc0507Module,
  ],
})
export class Doc05Module {}
