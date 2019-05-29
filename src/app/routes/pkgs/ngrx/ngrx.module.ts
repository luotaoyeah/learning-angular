import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { EffectsModule } from './effects/effects.module';
import { RouterStoreModule } from './router-store/router-store.module';

@NgModule({
  declarations: [],
  imports: [StoreModule, EffectsModule, RouterStoreModule],
  exports: [StoreModule, EffectsModule, RouterStoreModule],
})
export class NgrxModule {}
