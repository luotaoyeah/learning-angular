import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306120103Component } from './doc-03-06-12-01-03.component';
import { Doc03061201Service } from '../service/doc-03-06-12-01.service';

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
