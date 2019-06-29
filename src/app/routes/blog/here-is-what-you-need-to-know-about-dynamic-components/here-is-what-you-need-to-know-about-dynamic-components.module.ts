import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NzAlertComponent } from 'ng-zorro-antd';
import { HereIsWhatYouNeedToKnowAboutDynamicComponentsRoutingModule } from './here-is-what-you-need-to-know-about-dynamic-components-routing.module';
import { HereIsWhatYouNeedToKnowAboutDynamicComponentsComponent } from './here-is-what-you-need-to-know-about-dynamic-components.component';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';
import { X03Component } from './03/x-03.component';
import { X0301Component } from './03/01/x-03-01.component';
import { X0302Component } from './03/02/x-03-02.component';
import { X04Component } from './04/x-04.component';
import { X05Component } from './05/x-05.component';
import { X0501Component } from './05/01/x-05-01.component';
import { X050101Component } from './05/01/x-05-01-01.component';
import { X06Component } from './06/x-06.component';
import { X0601Component } from './06/01/x-06-01.component';

@NgModule({
  declarations: [
    HereIsWhatYouNeedToKnowAboutDynamicComponentsComponent,
    X01Component,
    X02Component,
    X03Component,
    X0301Component,
    X0302Component,
    X04Component,
    X05Component,
    X0501Component,
    X050101Component,
    X06Component,
    X0601Component,
  ],
  imports: [
    HereIsWhatYouNeedToKnowAboutDynamicComponentsRoutingModule,
    SharedModule,
  ],
  entryComponents: [NzAlertComponent, X050101Component, X0601Component],
})
export class HereIsWhatYouNeedToKnowAboutDynamicComponentsModule {}
