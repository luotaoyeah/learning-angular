import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@app/shared';
import { X020304Component } from './x-02-03-04.component';
import { x020304Reducer } from './store/reducers/02-03-04.reducer';

@NgModule({
  declarations: [X020304Component],
  imports: [StoreModule.forFeature('02-03-04', x020304Reducer), SharedModule],
  exports: [X020304Component],
})
export class X020304Module {}
