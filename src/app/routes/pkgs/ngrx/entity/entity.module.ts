import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRoutingModule } from './entity-routing.module';
import { SharedModule } from '@app/shared';
import { X01Component } from './01-entity-interfaces/x-01.component';
import { X02Module } from './02-entity-adapter/x-02.module';

@NgModule({
  declarations: [X01Component],
  imports: [CommonModule, EntityRoutingModule, SharedModule, X02Module],
})
export class EntityModule {}
