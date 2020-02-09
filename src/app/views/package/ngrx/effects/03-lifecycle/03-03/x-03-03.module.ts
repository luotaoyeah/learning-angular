import { NgModule } from '@angular/core';
import { X0303Component } from '@app/views/package/ngrx/effects/03-lifecycle/03-03/x-03-03.component';
import { EffectsModule } from '@ngrx/effects';
import { X0301Effects } from '@app/views/package/ngrx/effects/03-lifecycle/effects/03.effects';

@NgModule({
  declarations: [X0303Component],
  imports: [EffectsModule.forFeature([X0301Effects])],
  exports: [X0303Component],
})
export class X0303Module {}
