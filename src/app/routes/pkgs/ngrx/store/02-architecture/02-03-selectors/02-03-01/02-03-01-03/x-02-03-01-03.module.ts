import { NgModule } from '@angular/core';
import { X02030103Component } from './x-02-03-01-03.component';
import { StoreModule } from '@ngrx/store';
import { x02030103Reducer } from './store/reducers/02-03-01-03.reducer';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [X02030103Component],
  imports: [
    StoreModule.forFeature('02-03-01-03', x02030103Reducer),
    SharedModule,
  ],
  exports: [X02030103Component],
})
export class X02030103Module {}
