import { NgModule } from '@angular/core';
import { IntroIntoComponentAComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-a.component';
import { IntroIntoComponentBComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-b.component';
import { IntroIntoComponentCComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-c.component';
import { IntroIntoComponentDComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-d.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashPipe } from './03-01-architecture/03-01-03-intro-to-component/dash.pipe';
import { RadiusDirective } from './03-01-architecture/03-01-03-intro-to-component/radius.directive';
import { DiAComponent } from './03-01-architecture/03-01-04-di/di-a.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule, InputTextModule } from 'primeng/primeng';
import { Doc03Component } from './doc-03.component';
import { Doc0309Component } from './03-09-routing-navigation/doc-03-09.component';
// tslint:disable-next-line:max-line-length
import { Doc030901Component } from './03-09-routing-navigation/03-09-01-basic/doc-03-09-01.component';
import { Doc03RoutingModule } from './doc-03-routing.module';
import { Doc0301Component } from './03-01-architecture/doc-03-01.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-01-architecture/03-01-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-01-architecture/03-01-04-di/doc-fundamental-architecture-di.component';
// tslint:disable-next-line:max-line-length
import { Doc030901NotFoundComponent } from './03-09-routing-navigation/03-09-01-basic/doc-03-09-01-not-found.component';
// tslint:disable-next-line:max-line-length
import { RoutingNavigationBasicActivatedRouteComponent } from './03-09-routing-navigation/03-09-01-basic/activated-route/routing-navigation-basic-activated-route.component';
// tslint:disable-next-line:max-line-length
import { RoutingNavigationBasicRouterEventsComponent } from './03-09-routing-navigation/03-09-01-basic/router-events/routing-navigation-basic-router-events.component';
// tslint:disable-next-line:max-line-length
import { Doc030902Module } from './03-09-routing-navigation/03-09-02-sample-application/doc-03-09-02.module';
import { Doc0302Module } from './03-02-component-template/doc-03-02.module';
import { Doc0303Module } from './03-03-form/doc-03-03.module';
import { Doc0304Module } from './03-04-observables-rxjs/doc-03-04.module';
import { Doc0305Module } from './03-05-bootstrapping/doc-03-05.module';
import { Doc0306Module } from './03-06-ngmodules/doc-03-06.module';
import { Doc0307Module } from './03-07-dependency-injection/doc-03-07.module';
import { Doc0308Module } from './03-08-httpclient/doc-03-08.module';
import { Doc0310Module } from './03-10-animation/doc-03-10.module';
import { Doc0301Module } from './03-01-tour-of-heroes-app/doc-03-01.module';

@NgModule({
  declarations: [
    Doc03Component,
    IntroIntoComponentAComponent,
    IntroIntoComponentBComponent,
    IntroIntoComponentCComponent,
    IntroIntoComponentDComponent,
    DashPipe,
    RadiusDirective,
    DiAComponent,
    Doc0301Component,
    DocFundamentalArchitectureIntroToComponentComponent,
    DocFundamentalArchitectureDiComponent,
    Doc0309Component,
    Doc030901NotFoundComponent,
    Doc030901Component,
    RoutingNavigationBasicActivatedRouteComponent,
    RoutingNavigationBasicRouterEventsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...[ButtonModule, InputTextModule, AccordionModule],
    Doc03RoutingModule,
    Doc0301Module,
    Doc0302Module,
    Doc0303Module,
    Doc0304Module,
    Doc0305Module,
    Doc0306Module,
    Doc0307Module,
    Doc0308Module,
    Doc0310Module,
    Doc030902Module,
  ],
})
export class Doc03Module {}
