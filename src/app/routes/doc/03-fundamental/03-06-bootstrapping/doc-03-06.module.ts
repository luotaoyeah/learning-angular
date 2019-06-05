import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306RoutingModule } from './doc-03-06-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { Doc0306Component } from './doc-03-06.component';
import { Doc030501Component } from './03-05-01-javascript-modules/doc-03-05-01.component';
import { Directive030501Directive } from './03-05-01-javascript-modules/directive/directive-03-05-01.directive';

@NgModule({
  declarations: [
    Doc0306Component,
    Doc030501Component,
    Directive030501Directive,
  ],
  imports: [Doc0306RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0306Module {}
