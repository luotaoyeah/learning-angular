import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedRoutingModule } from './if-you-think-ngdocheck-means-your-component-is-being-checked-routing.module';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent } from './if-you-think-ngdocheck-means-your-component-is-being-checked.component';
import { X01Component } from './01/x-01.component';

@NgModule({
  declarations: [
    IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent,
    X01Component,
  ],
  imports: [
    IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedRoutingModule,
    SharedModule,
  ],
})
export class IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedModule {}
