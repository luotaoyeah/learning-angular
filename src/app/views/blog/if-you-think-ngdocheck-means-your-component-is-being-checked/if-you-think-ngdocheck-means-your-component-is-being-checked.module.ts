import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedRoutingModule } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/if-you-think-ngdocheck-means-your-component-is-being-checked-routing.module';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/if-you-think-ngdocheck-means-your-component-is-being-checked.component';
import { X01Component } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/01/x-01.component';
import { X01AComponent } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/01/x-01.a.component';
import { X02Component } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/02/x-02.component';
import { X02AComponent } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/02/x-02.a.component';
import { X02BComponent } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/02/x-02.b.component';

@NgModule({
  declarations: [
    IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent,
    X01Component,
    X01AComponent,
    X02Component,
    X02AComponent,
    X02BComponent,
  ],
  imports: [IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedRoutingModule, SharedModule],
})
export class IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedModule {}
