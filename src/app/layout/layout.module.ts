import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { LayoutDefaultComponent } from './default/layout-default.component';

const COMPONENTS = [LayoutDefaultComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
