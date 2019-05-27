import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { X01Component } from './01-getting-started/x-01.component';
import { X0101Component } from './01-getting-started/01-01/x-01-01.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [X01Component, X0101Component],
  imports: [CommonModule, StoreRoutingModule, SharedModule],
})
export class StoreModule {}
