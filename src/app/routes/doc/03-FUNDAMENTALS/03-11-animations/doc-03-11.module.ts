import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0311RoutingModule } from './doc-03-11-routing.module';
import { Doc031101Component } from './03-11-01-introduction/doc-03-11-01.component';
import { Doc031102Component } from './03-11-02-transition-and-triggers/doc-03-11-02.component';
import { Doc031103Component } from './03-11-03-complex-sequences/doc-03-11-03.component';
import { Doc031104Component } from './03-11-04-reusable-animations/doc-03-11-04.component';
import { Doc031105Component } from './03-11-05-route-transition-animations/doc-03-11-05.component';

@NgModule({
  declarations: [
    Doc031101Component,
    Doc031102Component,
    Doc031103Component,
    Doc031104Component,
    Doc031105Component,
  ],
  imports: [Doc0311RoutingModule, SharedModule],
})
export class Doc0311Module {}
