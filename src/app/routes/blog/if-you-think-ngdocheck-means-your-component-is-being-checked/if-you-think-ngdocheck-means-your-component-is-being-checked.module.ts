import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedRoutingModule } from './if-you-think-ngdocheck-means-your-component-is-being-checked-routing.module';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent } from './if-you-think-ngdocheck-means-your-component-is-being-checked.component';
import { X01Component } from './01/x-01.component';
import { X01AComponent } from './01/x-01.a.component';

@NgModule({
  declarations: [
    IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent,
    X01Component,
    X01AComponent,
  ],
  imports: [
    IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedRoutingModule,
    SharedModule,
  ],
})
export class IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedModule {}
