import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306120102Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/doc-03-06-12-01-02/doc-03-06-12-01-02.component';
import { Doc03061201Service } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/service/doc-03-06-12-01.service';

@NgModule({
  declarations: [Doc0306120102Component],
  imports: [CommonModule],
  exports: [Doc0306120102Component],
  providers: [
    {
      provide: Doc03061201Service,
      useValue: {
        doSomething(): string {
          return 'GREEN';
        },
      },
    },
  ],
})
export class Doc0306120102Module {}
