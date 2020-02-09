import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { X03Effects } from '@app/views/package/ngrx/effects/03-lifecycle/effects/03.effects';
import { X03Component } from '@app/views/package/ngrx/effects/03-lifecycle/x-03.component';
import { SharedModule } from '@app/shared';
import { StoreModule } from '@ngrx/store';
import { x03Reducer } from '@app/views/package/ngrx/effects/03-lifecycle/store/reducers/03.reducers';
import { X0302Component } from '@app/views/package/ngrx/effects/03-lifecycle/03-02/x-03-02.component';
import { X0303Module } from '@app/views/package/ngrx/effects/03-lifecycle/03-03/x-03-03.module';
import { X0304Component } from '@app/views/package/ngrx/effects/03-lifecycle/03-04/x-03-04.component';
import { X0305Module } from '@app/views/package/ngrx/effects/03-lifecycle/03-05/x-03-05.module';

@NgModule({
  declarations: [X03Component, X0302Component, X0304Component],
  imports: [
    SharedModule,
    StoreModule.forFeature('pkgs-ngrx-effects-03', x03Reducer),
    EffectsModule.forFeature([X03Effects]),
    X0303Module,
    X0305Module,
  ],
  exports: [X03Component],
})
export class X03Module {}
