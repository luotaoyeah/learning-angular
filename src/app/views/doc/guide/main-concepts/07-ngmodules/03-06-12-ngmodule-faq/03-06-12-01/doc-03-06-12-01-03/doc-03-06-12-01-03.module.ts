import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306120103Component } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/doc-03-06-12-01-03/doc-03-06-12-01-03.component';
import { Doc03061201Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-12-ngmodule-faq/03-06-12-01/service/doc-03-06-12-01.service';

@NgModule({
  declarations: [Doc0306120103Component],
  imports: [CommonModule],
  exports: [Doc0306120103Component],
  providers: [
    {
      provide: Doc03061201Service,
      useValue: {
        doSomething(): string {
          return 'YELLOW';
        },
      },
    },
  ],
})
export class Doc0306120103Module {}
