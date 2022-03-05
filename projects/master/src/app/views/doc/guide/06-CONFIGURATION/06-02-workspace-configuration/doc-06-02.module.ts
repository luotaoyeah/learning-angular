import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0602RoutingModule } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/doc-06-02-routing.module';
import { Doc0602Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/doc-06-02.component';
import { Doc060201Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/06-02-01-overall-json-structure/doc-06-02-01.component';
import { Doc060202Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/06-02-02-project-configuration-options/doc-06-02-02.component';
import { Doc060203Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/06-02-03-generation-schematics/doc-06-02-03.component';
import { Doc060204Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/06-02-04-project-tool-configuration-options/doc-06-02-04.component';
import { Doc060205Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/06-02-05-build-target/doc-06-02-05.component';
import { Doc060206Component } from '@app/views/doc/guide/06-CONFIGURATION/06-02-workspace-configuration/06-02-06-project-asset-configuration/doc-06-02-06.component';

@NgModule({
  declarations: [
    Doc0602Component,
    Doc060201Component,
    Doc060202Component,
    Doc060203Component,
    Doc060204Component,
    Doc060205Component,
    Doc060206Component,
  ],
  imports: [SharedModule, Doc0602RoutingModule],
})
export class Doc0602Module {}
