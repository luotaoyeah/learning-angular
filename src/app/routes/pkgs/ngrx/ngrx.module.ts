import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { EffectsModule } from './effects/effects.module';

@NgModule({
  declarations: [],
  imports: [StoreModule, EffectsModule],
  exports: [StoreModule, EffectsModule],
})
export class NgrxModule {}
