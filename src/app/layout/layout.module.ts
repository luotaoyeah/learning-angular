import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { LayoutDefaultComponent } from './default/layout-default.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';

const COMPONENTS = [LayoutDefaultComponent, SidebarComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
