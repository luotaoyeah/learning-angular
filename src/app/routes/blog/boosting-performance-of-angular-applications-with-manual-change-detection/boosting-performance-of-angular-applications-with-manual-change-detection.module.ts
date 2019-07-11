import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionRoutingModule } from './boosting-performance-of-angular-applications-with-manual-change-detection-routing.module';
import { BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionComponent } from './boosting-performance-of-angular-applications-with-manual-change-detection.component';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';

@NgModule({
  declarations: [
    BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionComponent,
    X01Component,
    X02Component,
  ],
  imports: [
    BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionRoutingModule,
    SharedModule,
  ],
})
export class BoostingPerformanceOfAngularApplicationsWithManualChangeDetectionModule {}
