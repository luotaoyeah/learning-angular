import { NgModule } from '@angular/core';
import { Doc0306080201Module } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/doc-03-06-08-02-01.module';
import { Doc0306080203Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-03/doc-03-06-08-02-03.component';

@NgModule({
  declarations: [Doc0306080203Component],
  imports: [Doc0306080201Module.forChild()],
  exports: [Doc0306080203Component],
})
export class Doc0306080203Module {}
