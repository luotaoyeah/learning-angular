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
import { InputTextModule } from 'primeng/primeng';
import { DocFundamentalComponent } from './doc-fundamental.component';
import { RoutingNavigationComponent } from './03-09-routing-navigation/routing-navigation.component';
import { RoutingNavigationBasicComponent } from './03-09-routing-navigation/03-09-01-basic/routing-navigation-basic.component';
import { DocFundamentalRoutingModule } from './doc-fundamental-routing.module';
import { DocFundamentalArchitectureComponent } from './03-01-architecture/doc-fundamental-architecture.component';
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-01-architecture/03-01-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-01-architecture/03-01-04-di/doc-fundamental-architecture-di.component';

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
    RoutingNavigationComponent,
    RoutingNavigationBasicComponent,
    DocFundamentalArchitectureComponent,
    DocFundamentalArchitectureIntroToComponentComponent,
    DocFundamentalArchitectureDiComponent
  ],
  imports: [CommonModule, DocFundamentalRoutingModule, FormsModule, ...[ButtonModule, InputTextModule]]
})
export class DocFundamentalModule {}
