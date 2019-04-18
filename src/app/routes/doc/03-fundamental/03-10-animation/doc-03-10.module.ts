import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0310RoutingModule } from './doc-03-10-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc031001Component } from './03-10-01-introduction/doc-03-10-01.component';
import { Doc031002Component } from './03-10-02-transition-and-triggers/doc-03-10-02.component';
import { Doc031003Component } from './03-10-03-complex-sequences/doc-03-10-03.component';
import { Doc031004Component } from './03-10-04-reusable-animations/doc-03-10-04.component';
import { Doc031005Component } from './03-10-05-route-transition-animations/doc-03-10-05.component';

@NgModule({
  declarations: [
    Doc031001Component,
    Doc031002Component,
    Doc031003Component,
    Doc031004Component,
    Doc031005Component,
  ],
  imports: [Doc0310RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0310Module {}
