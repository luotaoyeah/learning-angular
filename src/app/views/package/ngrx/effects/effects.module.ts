import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsRoutingModule } from '@app/views/package/ngrx/effects/effects-routing.module';
import { SharedModule } from '@app/shared';
import { X01Component } from '@app/views/package/ngrx/effects/01-overview/x-01.component';
import { X0101Component } from '@app/views/package/ngrx/effects/01-overview/01-01/x-01-01.component';
import { X0102Module } from '@app/views/package/ngrx/effects/01-overview/01-02/x-01-02.module';
import { X02Component } from '@app/views/package/ngrx/effects/02-testing/x-02.component';
import { X03Module } from '@app/views/package/ngrx/effects/03-lifecycle/x-03.module';

@NgModule({
  declarations: [X01Component, X0101Component, X02Component],
  imports: [
    CommonModule,
    EffectsRoutingModule,
    SharedModule,
    X0102Module,
    X03Module,
  ],
})
export class EffectsModule {}
