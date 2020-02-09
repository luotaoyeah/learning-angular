import { NgModule } from '@angular/core';
import { StoreModule } from '@app/views/package/ngrx/store/store.module';
import { EffectsModule } from '@app/views/package/ngrx/effects/effects.module';
import { RouterStoreModule } from '@app/views/package/ngrx/router-store/router-store.module';
import { EntityModule } from '@app/views/package/ngrx/entity/entity.module';
import { SchematicsModule } from '@app/views/package/ngrx/schematics/schematics.module';

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
