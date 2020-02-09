import { NgModule } from '@angular/core';
import { X02030101Component } from './x-02-03-01-01.component';
import { StoreModule } from '@ngrx/store';
import { x02030101Reducer } from './store/reducers/02-03-01-01.reducer';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [X02030101Component],
  imports: [
    StoreModule.forFeature('02-03-01-01', x02030101Reducer),
    SharedModule,
  ],
  exports: [X02030101Component],
})
export class X02030101Module {}
