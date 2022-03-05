import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent } from '@app/views/blog/if-you-think-ngdocheck-means-your-component-is-being-checked/if-you-think-ngdocheck-means-your-component-is-being-checked.component';

const routes: Routes = [
  {
    path: 'if-you-think-ngdocheck-means-your-component-is-being-checked',
    component: IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedRoutingModule {}
