import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterStoreRoutingModule } from './router-store-routing.module';
import { SharedModule } from '@app/shared';
import { X01Component } from './01-actions/x-01.component';
import { EffectsModule } from '@ngrx/effects';
import { X01Effects } from './01-actions/effects/01.effects';
import { X02Component } from './02-configuration/x-02.component';

@NgModule({
  declarations: [X01Component, X02Component],
  imports: [
    CommonModule,
    RouterStoreRoutingModule,
    SharedModule,
    EffectsModule.forFeature([X01Effects]),
  ],
})
export class RouterStoreModule {}
