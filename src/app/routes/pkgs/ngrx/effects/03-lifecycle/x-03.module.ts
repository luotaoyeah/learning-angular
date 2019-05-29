import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { X03Effects } from './effects/03.effects';
import { X03Component } from './x-03.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [X03Component],
  imports: [SharedModule, EffectsModule.forFeature([X03Effects])],
  exports: [X03Component],
})
export class X03Module {}
