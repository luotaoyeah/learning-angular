import { NgModule } from '@angular/core';
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-02-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-02-04-intro-to-services-and-di/doc-fundamental-architecture-di.component';
import { Doc0302RoutingModule } from './doc-03-02-routing.module';
import { IntroIntoComponentAComponent } from './03-02-03-intro-to-component/intro-into-component-a.component';
import { IntroIntoComponentBComponent } from './03-02-03-intro-to-component/intro-into-component-b.component';
import { IntroIntoComponentCComponent } from './03-02-03-intro-to-component/intro-into-component-c.component';
import { IntroIntoComponentDComponent } from './03-02-03-intro-to-component/intro-into-component-d.component';
import { DiAComponent } from './03-02-04-intro-to-services-and-di/di-a.component';
import { DashPipe } from './03-02-03-intro-to-component/dash.pipe';
import { RadiusDirective } from './03-02-03-intro-to-component/radius.directive';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    DocFundamentalArchitectureIntroToComponentComponent,
    DocFundamentalArchitectureDiComponent,
    DocFundamentalArchitectureIntroToComponentComponent,
    DocFundamentalArchitectureDiComponent,
    IntroIntoComponentAComponent,
    IntroIntoComponentBComponent,
    IntroIntoComponentCComponent,
    IntroIntoComponentDComponent,
    DiAComponent,
    DashPipe,
    RadiusDirective,
  ],
  imports: [CommonModule, SharedModule, ...[ButtonModule, AccordionModule], Doc0302RoutingModule],
})
export class Doc0302Module {}
