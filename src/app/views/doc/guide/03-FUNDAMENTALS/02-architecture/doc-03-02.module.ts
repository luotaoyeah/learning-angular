import { NgModule } from '@angular/core';
import { DocFundamentalArchitectureIntroToComponentComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-04-intro-to-services-and-di/doc-fundamental-architecture-di.component';
import { Doc0302RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/doc-03-02-routing.module';
import { IntroIntoComponentAComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-03-intro-to-component/intro-into-component-a.component';
import { IntroIntoComponentBComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-03-intro-to-component/intro-into-component-b.component';
import { IntroIntoComponentCComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-03-intro-to-component/intro-into-component-c.component';
import { IntroIntoComponentDComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-03-intro-to-component/intro-into-component-d.component';
import { DiAComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-04-intro-to-services-and-di/di-a.component';
import { DashPipe } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-03-intro-to-component/dash.pipe';
import { RadiusDirective } from '@app/views/doc/guide/03-FUNDAMENTALS/02-architecture/03-02-03-intro-to-component/radius.directive';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';

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
  imports: [CommonModule, SharedModule, Doc0302RoutingModule],
})
export class Doc0302Module {}
