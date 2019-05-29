import { NgModule } from '@angular/core';
import { X0303Component } from './x-03-03.component';
import { EffectsModule } from '@ngrx/effects';
import { X0301Effects } from '../effects/03.effects';

@NgModule({
  declarations: [X0303Component],
  imports: [EffectsModule.forFeature([X0301Effects])],
  exports: [X0303Component],
})
export class X0303Module {}
