import { NgModule } from '@angular/core';
import { X0305Component } from './x-03-05.component';
import { EffectsModule } from '@ngrx/effects';
import { X030501Effects, X030502Effects } from '../effects/03-05.effects';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [X0305Component],
  imports: [
    SharedModule,
    EffectsModule.forFeature([
      X030501Effects,
      X030501Effects,
      X030502Effects,
      X030502Effects,
    ]),
  ],
  exports: [X0305Component],
})
export class X0305Module {}
