import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamespaceRoutingModule } from './namespace-routing.module';
import { NamespaceComponent } from './namespace.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [NamespaceComponent],
  imports: [CommonModule, NamespaceRoutingModule, SharedModule],
})
export class NamespaceModule {}
