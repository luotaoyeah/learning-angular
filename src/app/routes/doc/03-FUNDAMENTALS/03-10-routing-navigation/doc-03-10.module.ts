import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0310RoutingModule } from './doc-03-10-routing.module';
import { Doc0310Component } from './doc-03-10.component';
import { Doc031001NotFoundComponent } from './03-10-01-the-basics/doc-03-10-01-not-found.component';
import { Doc031001Component } from './03-10-01-the-basics/doc-03-10-01.component';
import { RoutingNavigationBasicActivatedRouteComponent } from './03-10-01-the-basics/activated-route/routing-navigation-basic-activated-route.component';
import { RoutingNavigationBasicRouterEventsComponent } from './03-10-01-the-basics/router-events/routing-navigation-basic-router-events.component';
import { Doc03100101Component } from './03-10-01-the-basics/03-10-01-01/doc-03-10-01-01.component';
import { Doc03100104Component } from './03-10-01-the-basics/03-10-01-04/doc-03-10-01-04.component';

@NgModule({
  declarations: [
    Doc0310Component,
    Doc03100101Component,
    Doc03100104Component,
    Doc031001NotFoundComponent,
    Doc031001Component,
    RoutingNavigationBasicActivatedRouteComponent,
    RoutingNavigationBasicRouterEventsComponent,
  ],
  imports: [SharedModule, Doc0310RoutingModule],
})
export class Doc0310Module {}
