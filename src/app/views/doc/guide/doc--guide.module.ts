import { NgModule } from '@angular/core';
import { Doc02Module } from '@app/views/doc/guide/02-SETUP/doc-02.module';
import { Doc04Module } from '@app/views/doc/guide/04-TECHNIQUES/doc-04.module';
import { Doc05Module } from '@app/views/doc/guide/05-DEV-WORKFLOW/doc-05.module';
import { Doc06Module } from '@app/views/doc/guide/06-CONFIGURATION/doc-06.module';
import { Doc08Module } from '@app/views/doc/guide/08-CLI-COMMANDS/doc-08.module';
import { Doc09Module } from '@app/views/doc/guide/09-API/doc-09.module';
import { MainConceptsModule } from '@app/views/doc/guide/main-concepts/main-concepts.module';

@NgModule({
  imports: [Doc02Module, MainConceptsModule, Doc04Module, Doc05Module, Doc06Module, Doc08Module, Doc09Module],
})
export class DocGuideModule {}
