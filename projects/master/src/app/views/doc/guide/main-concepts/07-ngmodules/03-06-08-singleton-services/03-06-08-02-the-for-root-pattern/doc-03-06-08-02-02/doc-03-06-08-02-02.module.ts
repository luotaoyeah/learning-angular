import { NgModule } from '@angular/core';
import { Doc0306080201Module } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/doc-03-06-08-02-01.module';
import { Doc0306080202Component } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-02/doc-03-06-08-02-02.component';

@NgModule({
  declarations: [Doc0306080202Component],
  imports: [Doc0306080201Module.forChild()],
  exports: [Doc0306080202Component],
})
export class Doc0306080202Module {}
