import { NgModule } from '@angular/core';
import { X0301Component } from './x-03-01.component';
import { StoreModule } from '@ngrx/store';
import {
  metaReducer01,
  metaReducer02,
  x0301Reducer,
} from './store/reducers/03-01.reducer';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [X0301Component],
  imports: [
    StoreModule.forFeature('03-01', x0301Reducer, {
      metaReducers: [metaReducer01, metaReducer02],
    }),
    SharedModule,
  ],
  exports: [X0301Component],
})
export class X0301Module {}
