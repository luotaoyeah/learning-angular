import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306120102Component } from './doc-03-06-12-01-02.component';
import { Doc03061201Service } from '../service/doc-03-06-12-01.service';

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
