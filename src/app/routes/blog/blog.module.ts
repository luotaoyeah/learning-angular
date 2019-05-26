import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComprehensiveGuideToAngularOnpushModule } from './a-comprehensive-guide-to-angular-onpush/a-comprehensive-guide-to-angular-onpush.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AComprehensiveGuideToAngularOnpushModule],
  exports: [AComprehensiveGuideToAngularOnpushModule],
})
export class BlogModule {}
