import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared';
import { X020302Component } from './x-02-03-02.component';
import { x020302Reducer } from './store/reducers/02-03-02.reducer';

@NgModule({
  declarations: [X020302Component],
  imports: [StoreModule.forFeature('02-03-02', x020302Reducer), SharedModule],
  exports: [X020302Component],
})
export class X020302Module {}
