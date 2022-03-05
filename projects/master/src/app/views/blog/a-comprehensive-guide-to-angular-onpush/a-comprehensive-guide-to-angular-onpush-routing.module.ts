import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComprehensiveGuideToAngularOnpushComponent } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/a-comprehensive-guide-to-angular-onpush.component';

const routes: Routes = [
  {
    path: 'a-comprehensive-guide-to-angular-onpush',
    component: AComprehensiveGuideToAngularOnpushComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AComprehensiveGuideToAngularOnpushRoutingModule {}
