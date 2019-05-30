import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRoutingModule } from './entity-routing.module';
import { SharedModule } from '@shared';
import { X01Component } from './01-entity-interfaces/x-01.component';

@NgModule({
  declarations: [X01Component],
  imports: [CommonModule, EntityRoutingModule, SharedModule],
})
export class EntityModule {}
