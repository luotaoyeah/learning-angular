import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsRoutingModule } from './effects-routing.module';
import { SharedModule } from '@shared';
import { X01Component } from './01-overview/x-01.component';

@NgModule({
  declarations: [X01Component],
  imports: [CommonModule, EffectsRoutingModule, SharedModule],
})
export class EffectsModule {}
