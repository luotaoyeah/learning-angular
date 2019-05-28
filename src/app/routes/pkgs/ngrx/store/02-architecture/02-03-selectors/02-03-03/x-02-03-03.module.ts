import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared';
import { X020303Component } from './x-02-03-03.component';
import { x020303Reducer } from './store/reducers/02-03-03.reducer';

@NgModule({
  declarations: [X020303Component],
  imports: [StoreModule.forFeature('02-03-03', x020303Reducer), SharedModule],
  exports: [X020303Component],
})
export class X020303Module {}
