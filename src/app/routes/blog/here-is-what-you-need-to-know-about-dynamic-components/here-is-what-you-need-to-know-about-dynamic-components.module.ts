import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NzAlertComponent } from 'ng-zorro-antd';
import { HereIsWhatYouNeedToKnowAboutDynamicComponentsRoutingModule } from './here-is-what-you-need-to-know-about-dynamic-components-routing.module';
import { HereIsWhatYouNeedToKnowAboutDynamicComponentsComponent } from './here-is-what-you-need-to-know-about-dynamic-components.component';
import { X01Component } from './01/x-01.component';

@NgModule({
  declarations: [
    HereIsWhatYouNeedToKnowAboutDynamicComponentsComponent,
    X01Component,
  ],
  imports: [
    HereIsWhatYouNeedToKnowAboutDynamicComponentsRoutingModule,
    SharedModule,
  ],
  entryComponents: [NzAlertComponent],
})
export class HereIsWhatYouNeedToKnowAboutDynamicComponentsModule {}
