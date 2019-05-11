import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0502RoutingModule } from './doc-05-02-routing.module';
import { Doc0502Component } from './doc-05-02.component';
import { Doc050201Component } from './05-02-01-overall-json-structure/doc-05-02-01.component';
import { Doc050202Component } from './05-02-02-project-configuration-options/doc-05-02-02.component';
import { Doc050203Component } from './05-02-03-generation-schematics/doc-05-02-03.component';
import { Doc050204Component } from './05-02-04-project-tool-configuration-options/doc-05-02-04.component';

@NgModule({
  declarations: [
    Doc0502Component,
    Doc050201Component,
    Doc050202Component,
    Doc050203Component,
    Doc050204Component,
  ],
  imports: [CommonModule, FormsModule, SharedModule, Doc0502RoutingModule],
})
export class Doc0502Module {}
