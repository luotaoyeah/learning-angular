import { NgModule } from '@angular/core';
import { Doc02Module } from './02-SETUP/doc-02.module';
import { Doc03Module } from './03-FUNDAMENTALS/doc-03.module';
import { Doc04Module } from './04-TECHNIQUES/doc-04.module';
import { Doc05Module } from './05-DEV-WORKFLOW/doc-05.module';
import { Doc06Module } from './06-CONFIGURATION/doc-06.module';
import { Doc08Module } from './08-CLI-COMMANDS/doc-08.module';
import { Doc09Module } from './09-API/doc-09.module';

@NgModule({
  imports: [
    Doc02Module,
    Doc03Module,
    Doc04Module,
    Doc05Module,
    Doc06Module,
    Doc08Module,
    Doc09Module,
  ],
})
export class DocModule {}
