import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AComprehensiveGuideToAngularOnpushRoutingModule } from './a-comprehensive-guide-to-angular-onpush-routing.module';
import { AComprehensiveGuideToAngularOnpushComponent } from './a-comprehensive-guide-to-angular-onpush.component';
import { SharedModule } from '@shared';
import { X01Component } from './01/x-01.component';

@NgModule({
  declarations: [AComprehensiveGuideToAngularOnpushComponent, X01Component],
  imports: [
    CommonModule,
    AComprehensiveGuideToAngularOnpushRoutingModule,
    SharedModule,
  ],
})
export class AComprehensiveGuideToAngularOnpushModule {}
