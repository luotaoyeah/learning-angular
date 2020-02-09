import { NgModule } from '@angular/core';
import { X02Component } from '@app/views/package/ngrx/entity/02-entity-adapter/x-02.component';
import { StoreModule } from '@ngrx/store';
import { NGRX_STATE_KEY } from '@app/views/package/ngrx/entity/02-entity-adapter/store/state/i-state';
import { x02Reducer } from '@app/views/package/ngrx/entity/02-entity-adapter/store/reducers/02.reducers';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [X02Component],
  imports: [SharedModule, StoreModule.forFeature(NGRX_STATE_KEY, x02Reducer)],
  exports: [X02Component],
})
export class X02Module {}
