import { NgModule } from '@angular/core';
import { Doc03Module } from './03-fundamental/doc-03.module';
import { Doc02Module } from './02-tutorial/doc-02.module';

@NgModule({
  imports: [Doc02Module, Doc03Module],
  exports: [Doc02Module, Doc03Module],
})
export class DocModule {}
