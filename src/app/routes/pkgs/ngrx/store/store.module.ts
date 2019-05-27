import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { X01Component } from './01-getting-started/x-01.component';
import { X0101Component } from './01-getting-started/01-01/x-01-01.component';
import { SharedModule } from '@shared';
import { X02Component } from './02-architecture/x-02.component';
import { X0201Component } from './02-architecture/02-01-actions/x-02-01.component';

@NgModule({
  declarations: [X01Component, X0101Component, X02Component, X0201Component],
  imports: [CommonModule, StoreRoutingModule, SharedModule],
})
export class StoreModule {}
