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
import { DocFundamentalComponent } from './doc-fundamental.component';
import { DocFundamentalRoutingNavigationComponent } from './03-09-routing-navigation/doc-fundamental-routing-navigation.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalRoutingNavigationBasicComponent } from './03-09-routing-navigation/03-09-01-basic/doc-fundamental-routing-navigation-basic.component';
import { DocFundamentalRoutingModule } from './doc-fundamental-routing.module';
import { DocFundamentalArchitectureComponent } from './03-01-architecture/doc-fundamental-architecture.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-01-architecture/03-01-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-01-architecture/03-01-04-di/doc-fundamental-architecture-di.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalRoutingNavigationNotFoundComponent } from './03-09-routing-navigation/03-09-01-basic/doc-fundamental-routing-navigation-not-found.component';
// tslint:disable-next-line:max-line-length
import { RoutingNavigationBasicActivatedRouteComponent } from './03-09-routing-navigation/03-09-01-basic/activated-route/routing-navigation-basic-activated-route.component';
// tslint:disable-next-line:max-line-length
import { RoutingNavigationBasicRouterEventsComponent } from './03-09-routing-navigation/03-09-01-basic/router-events/routing-navigation-basic-router-events.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalRoutingSampleModule } from './03-09-routing-navigation/03-09-02-sample-application/doc-fundamental-routing-sample.module';
import { DocFundamentalComponentTemplateModule } from './03-02-component-template/doc-fundamental-component-template.module';

@NgModule({
  declarations: [
    DocFundamentalComponent,
    IntroIntoComponentAComponent,
    IntroIntoComponentBComponent,
    IntroIntoComponentCComponent,
    IntroIntoComponentDComponent,
    DashPipe,
    RadiusDirective,
    DiAComponent,
    DocFundamentalArchitectureComponent,
    DocFundamentalArchitectureIntroToComponentComponent,
    DocFundamentalArchitectureDiComponent,
    DocFundamentalRoutingNavigationComponent,
    DocFundamentalRoutingNavigationNotFoundComponent,
    DocFundamentalRoutingNavigationBasicComponent,
    RoutingNavigationBasicActivatedRouteComponent,
    RoutingNavigationBasicRouterEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...[ButtonModule, InputTextModule, AccordionModule],
    DocFundamentalRoutingModule,
    DocFundamentalRoutingSampleModule,
    DocFundamentalComponentTemplateModule
  ]
})
export class DocFundamentalModule {}
