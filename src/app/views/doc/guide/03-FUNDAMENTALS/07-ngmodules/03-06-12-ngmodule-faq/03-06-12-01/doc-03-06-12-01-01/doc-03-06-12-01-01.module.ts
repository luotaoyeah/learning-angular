import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306120101Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/doc-03-06-12-01-01/doc-03-06-12-01-01.component';
import { Doc0306120102Module } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/doc-03-06-12-01-02/doc-03-06-12-01-02.module';
import { Doc0306120103Module } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/doc-03-06-12-01-03/doc-03-06-12-01-03.module';
import { Doc03061201Service } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/service/doc-03-06-12-01.service';

@NgModule({
  declarations: [Doc0306120101Component],
  imports: [CommonModule, Doc0306120102Module, Doc0306120103Module],
  exports: [Doc0306120101Component],
  providers: [
    {
      provide: Doc03061201Service,
      useValue: {
        doSomething(): string {
          return 'BLACK';
        },
      },
    },
  ],
})
export class Doc0306120101Module {}
