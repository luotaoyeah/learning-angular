import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from '@app/views/package/jasmine/global/global-routing.module';
import { GlobalComponent } from '@app/views/package/jasmine/global/global.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [GlobalComponent],
  imports: [CommonModule, GlobalRoutingModule, SharedModule],
})
export class GlobalModule {}
