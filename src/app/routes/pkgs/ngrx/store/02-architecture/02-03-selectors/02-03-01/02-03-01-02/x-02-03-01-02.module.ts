import { NgModule } from '@angular/core';
import { X02030102Component } from './x-02-03-01-02.component';
import { StoreModule } from '@ngrx/store';
import { x02030102Reducer } from './store/reducers/02-03-01-02.reducer';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [X02030102Component],
  imports: [
    StoreModule.forFeature('02-03-01-02', x02030102Reducer),
    SharedModule,
  ],
  exports: [X02030102Component],
})
export class X02030102Module {}
