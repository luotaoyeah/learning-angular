import { NgModule } from '@angular/core';
import { X02030101Component } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-01/x-02-03-01-01.component';
import { StoreModule } from '@ngrx/store';
import { x02030101Reducer } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-01/store/reducers/02-03-01-01.reducer';
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
