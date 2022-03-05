import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HereIsWhatYouNeedToKnowAboutDynamicComponentsComponent } from '@app/views/blog/here-is-what-you-need-to-know-about-dynamic-components/here-is-what-you-need-to-know-about-dynamic-components.component';

const routes: Routes = [
  {
    path: 'here-is-what-you-need-to-know-about-dynamic-components-in-angular',
    component: HereIsWhatYouNeedToKnowAboutDynamicComponentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HereIsWhatYouNeedToKnowAboutDynamicComponentsRoutingModule {}
