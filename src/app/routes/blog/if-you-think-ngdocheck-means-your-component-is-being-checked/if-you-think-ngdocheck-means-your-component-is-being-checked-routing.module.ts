import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfYouThinkNgdocheckMeansYourComponentIsBeingCheckedComponent } from './if-you-think-ngdocheck-means-your-component-is-being-checked.component';

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
