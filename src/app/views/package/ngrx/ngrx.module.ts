import { NgModule } from '@angular/core';
import { StoreModule } from './store/store.module';
import { EffectsModule } from './effects/effects.module';
import { RouterStoreModule } from './router-store/router-store.module';
import { EntityModule } from './entity/entity.module';
import { SchematicsModule } from './schematics/schematics.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule,
    EffectsModule,
    RouterStoreModule,
    EntityModule,
    SchematicsModule,
  ],
  exports: [
    StoreModule,
    EffectsModule,
    RouterStoreModule,
    EntityModule,
    SchematicsModule,
  ],
})
export class NgrxModule {}
