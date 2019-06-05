import { NgModule } from '@angular/core';
import { Doc02Module } from './02-setup/doc-02.module';
import { Doc03Module } from './03-fundamental/doc-03.module';
import { Doc04Module } from './04-techniques/doc-04.module';
import { Doc05Module } from './05-setup-deployment/doc-05.module';
import { Doc08Module } from './08-cli/doc-08.module';
import { Doc09Module } from './09-api/doc-09.module';

@NgModule({
  imports: [
    Doc02Module,
    Doc03Module,
    Doc04Module,
    Doc05Module,
    Doc08Module,
    Doc09Module,
  ],
  exports: [
    Doc02Module,
    Doc03Module,
    Doc04Module,
    Doc05Module,
    Doc08Module,
    Doc09Module,
  ],
})
export class DocModule {}
