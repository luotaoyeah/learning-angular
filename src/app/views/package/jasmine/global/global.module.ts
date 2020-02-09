import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { GlobalComponent } from './global.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [GlobalComponent],
  imports: [CommonModule, GlobalRoutingModule, SharedModule],
})
export class GlobalModule {}
