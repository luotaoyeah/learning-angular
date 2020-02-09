import { NgModule } from '@angular/core';
import { X02030102Component } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/x-02-03-01-02.component';
import { StoreModule } from '@ngrx/store';
import { x02030102Reducer } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-01/02-03-01-02/store/reducers/02-03-01-02.reducer';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [X02030102Component],
  imports: [
    StoreModule.forFeature('02-03-01-02', x02030102Reducer),
    SharedModule,
  ],
  exports: [X02030102Component],
})
export class X02030102Module {}
