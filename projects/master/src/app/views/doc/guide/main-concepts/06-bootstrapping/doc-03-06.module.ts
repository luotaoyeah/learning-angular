import { NgModule } from '@angular/core';
import { Doc0306RoutingModule } from '@app/views/doc/guide/main-concepts/06-bootstrapping/doc-03-06-routing.module';
import { SharedModule } from '@app/shared';
import { Doc0306Component } from '@app/views/doc/guide/main-concepts/06-bootstrapping/doc-03-06.component';
import { Doc030501Component } from '@app/views/doc/guide/main-concepts/06-bootstrapping/03-05-01-javascript-modules/doc-03-05-01.component';
import { Directive030501Directive } from '@app/views/doc/guide/main-concepts/06-bootstrapping/03-05-01-javascript-modules/directive/directive-03-05-01.directive';

@NgModule({
  declarations: [Doc0306Component, Doc030501Component, Directive030501Directive],
  imports: [Doc0306RoutingModule, SharedModule],
})
export class Doc0306Module {}
