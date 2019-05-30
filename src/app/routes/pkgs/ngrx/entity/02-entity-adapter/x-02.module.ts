import { NgModule } from '@angular/core';
import { X02Component } from './x-02.component';
import { StoreModule } from '@ngrx/store';
import { NGRX_STATE_KEY } from './store/state/IState';
import { x02Reducer } from './store/reducers/02.reducers';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [X02Component],
  imports: [SharedModule, StoreModule.forFeature(NGRX_STATE_KEY, x02Reducer)],
  exports: [X02Component],
})
export class X02Module {}
