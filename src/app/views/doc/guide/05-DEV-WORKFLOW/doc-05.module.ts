import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0504Module } from './05-04-testing/doc-05-04.module';

@NgModule({
  imports: [SharedModule, Doc0504Module],
})
export class Doc05Module {}
