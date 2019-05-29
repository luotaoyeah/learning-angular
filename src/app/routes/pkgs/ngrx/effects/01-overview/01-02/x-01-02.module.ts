import { NgModule } from '@angular/core';
import { X0102Component } from './x-01-02.component';
import { SharedModule } from '@shared';
import { StoreModule } from '@ngrx/store';
import { x0102Reducer } from './store/reducers/01-02.reducers';
import { EffectsModule } from '@ngrx/effects';
import { X0102Effects } from './effects/01-02.effects';

@NgModule({
  declarations: [X0102Component],
  imports: [
    SharedModule,
    StoreModule.forFeature('pkgs-ngrx-effects-01-02', x0102Reducer),
    EffectsModule.forFeature([X0102Effects]),
  ],
  exports: [X0102Component],
})
export class X0102Module {}
