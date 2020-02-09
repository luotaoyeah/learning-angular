import { NgModule } from '@angular/core';
import { X01Component } from '@app/views/package/ngrx/store/01-getting-started/x-01.component';
import { StoreModule } from '@ngrx/store';
import { x01Reducer } from '@app/views/package/ngrx/store/01-getting-started/store/reducers/01.reducer';
import { SharedModule } from '@app/shared';
import { X0101Component } from '@app/views/package/ngrx/store/01-getting-started/01-01/x-01-01.component';

@NgModule({
  declarations: [X01Component, X0101Component],
  imports: [StoreModule.forFeature('01', x01Reducer), SharedModule],
  exports: [X01Component],
})
export class X01Module {}
