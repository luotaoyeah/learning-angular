import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0310RoutingModule } from './doc-03-10-routing.module';
import { Doc0310Component } from './doc-03-10.component';
import { Doc031001Component } from './01-the-basics/doc-03-10-01.component';
import { Doc03100101Component } from './01-the-basics/03-10-01-01/doc-03-10-01-01.component';
import { Doc03100104Component } from './01-the-basics/03-10-01-04/doc-03-10-01-04.component';
import { Doc03100105Component } from './01-the-basics/03-10-01-05/doc-03-10-01-05.component';
import { Doc03100106Component } from './01-the-basics/03-10-01-06/doc-03-10-01-06.component';
import { Doc03100108Component } from './01-the-basics/03-10-01-08/doc-03-10-01-08.component';
import { Doc03100109Component } from './01-the-basics/03-10-01-09/doc-03-10-01-09.component';
import { Doc031002Module } from './02-the-sample-application/doc-03-10-02.module';

@NgModule({
  declarations: [
    Doc0310Component,
    Doc031001Component,
    Doc03100101Component,
    Doc03100104Component,
    Doc03100105Component,
    Doc03100106Component,
    Doc03100108Component,
    Doc03100109Component,
  ],
  imports: [SharedModule, Doc0310RoutingModule, Doc031002Module],
})
export class Doc0310Module {}
