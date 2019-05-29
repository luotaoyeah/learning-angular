import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsRoutingModule } from './effects-routing.module';
import { SharedModule } from '@shared';
import { X01Component } from './01-overview/x-01.component';
import { X0101Component } from './01-overview/01-01/x-01-01.component';

@NgModule({
  declarations: [X01Component, X0101Component],
  imports: [CommonModule, EffectsRoutingModule, SharedModule],
})
export class EffectsModule {}
