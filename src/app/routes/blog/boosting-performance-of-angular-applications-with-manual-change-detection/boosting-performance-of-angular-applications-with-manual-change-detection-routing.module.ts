import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionComponent } from './boosting-performance-of-angular-applications-with-manual-change-detection.component';

const routes: Routes = [
  {
    path:
      'boosting-performance-of-angular-applications-with-manual-change-detection',
    component: BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionRoutingModule {}
