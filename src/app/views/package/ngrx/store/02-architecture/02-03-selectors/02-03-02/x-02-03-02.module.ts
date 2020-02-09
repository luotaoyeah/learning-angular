import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@app/shared';
import { X020302Component } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-02/x-02-03-02.component';
import { x020302Reducer } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-02/store/reducers/02-03-02.reducer';

@NgModule({
  declarations: [X020302Component],
  imports: [StoreModule.forFeature('02-03-02', x020302Reducer), SharedModule],
  exports: [X020302Component],
})
export class X020302Module {}
