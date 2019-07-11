import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { EverythingYouNeedToKnowAboutChangeDetectionRoutingModule } from './everything-you-need-to-know-about-change-detection-routing.module';
import { EverythingYouNeedToKnowAboutChangeDetectionComponent } from './everything-you-need-to-know-about-change-detection.component';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';
import { X03Component } from './03/x-03.component';
import { X03CComponent } from './03/x-03.c.component';
import { X03AComponent } from './03/x-03.a.component';
import { X03BComponent } from './03/x-03.b.component';
import { X04Component } from './04/x-04.component';
import { X0401Component } from './04/01/x-04-01.component';
import { X0402Component } from './04/02/x-04-02.component';
import { X0402AComponent } from './04/02/x-04-02.a.component';
import { X0403Component } from './04/03/x-04-03.component';
import { X0402BComponent } from './04/02/x-04-02.b.component';
import { X0403AComponent } from './04/03/x-04-03.a.component';

@NgModule({
  declarations: [
    EverythingYouNeedToKnowAboutChangeDetectionComponent,
    X01Component,
    X02Component,
    X03Component,
    X03AComponent,
    X03BComponent,
    X03CComponent,
    X04Component,
    X0401Component,
    X0402Component,
    X0402AComponent,
    X0402BComponent,
    X0403Component,
    X0403AComponent,
  ],
  imports: [
    EverythingYouNeedToKnowAboutChangeDetectionRoutingModule,
    SharedModule,
  ],
})
export class EverythingYouNeedToKnowAboutChangeDetectionModule {}
