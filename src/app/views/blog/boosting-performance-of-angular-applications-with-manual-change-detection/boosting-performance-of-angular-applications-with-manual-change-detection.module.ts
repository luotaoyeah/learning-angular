import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionRoutingModule } from '@app/views/blog/boosting-performance-of-angular-applications-with-manual-change-detection/boosting-performance-of-angular-applications-with-manual-change-detection-routing.module';
import { BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionComponent } from '@app/views/blog/boosting-performance-of-angular-applications-with-manual-change-detection/boosting-performance-of-angular-applications-with-manual-change-detection.component';
import { X01Component } from '@app/views/blog/boosting-performance-of-angular-applications-with-manual-change-detection/01/x-01.component';
import { X02Component } from '@app/views/blog/boosting-performance-of-angular-applications-with-manual-change-detection/02/x-02.component';

@NgModule({
  declarations: [
    BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionComponent,
    X01Component,
    X02Component,
  ],
  imports: [BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionRoutingModule, SharedModule],
})
export class BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionModule {}
