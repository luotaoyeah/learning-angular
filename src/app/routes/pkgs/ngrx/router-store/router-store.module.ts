import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterStoreRoutingModule } from './router-store-routing.module';
import { SharedModule } from '@shared';
import { X01Component } from './01-actions/x-01.component';

@NgModule({
  declarations: [X01Component],
  imports: [CommonModule, RouterStoreRoutingModule, SharedModule],
})
export class RouterStoreModule {}
