import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamespaceRoutingModule } from '@app/views/package/jasmine/namespace/namespace-routing.module';
import { NamespaceComponent } from '@app/views/package/jasmine/namespace/namespace.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [NamespaceComponent],
  imports: [CommonModule, NamespaceRoutingModule, SharedModule],
})
export class NamespaceModule {}
