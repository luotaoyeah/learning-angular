import { NgModule } from '@angular/core';
import { X01Component } from './x-01.component';
import { StoreModule } from '@ngrx/store';
import { x01Reducer } from './store/reducers/01.reducer';
import { SharedModule } from '@app/shared';
import { X0101Component } from './01-01/x-01-01.component';

@NgModule({
  declarations: [X01Component, X0101Component],
  imports: [StoreModule.forFeature('01', x01Reducer), SharedModule],
  exports: [X01Component],
})
export class X01Module {}
