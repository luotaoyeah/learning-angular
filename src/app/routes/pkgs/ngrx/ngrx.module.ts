import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { EffectsModule } from './effects/effects.module';
import { RouterStoreModule } from './router-store/router-store.module';
import { EntityModule } from './entity/entity.module';

@NgModule({
  declarations: [],
  imports: [StoreModule, EffectsModule, RouterStoreModule, EntityModule],
  exports: [StoreModule, EffectsModule, RouterStoreModule, EntityModule],
})
export class NgrxModule {}
