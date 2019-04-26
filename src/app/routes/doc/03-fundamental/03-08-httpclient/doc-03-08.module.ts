import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0308RoutingModule } from './doc-03-08-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0308Component } from './doc-03-08.component';
import { Doc030801Component } from './03-08-01-getting-json-data/doc-03-08-01.component';
import { Doc030802Component } from './03-08-02-error-handling/doc-03-08-02.component';
import { Doc030803Component } from './03-08-03-requesting-non-json-data/doc-03-08-03.component';
import { Doc030804Component } from './03-08-04-sending-data-to-the-server/doc-03-08-04.component';
import { Doc030805Component } from './03-08-05-advanced-usage/doc-03-08-05.component';
import { Doc03080501Component } from './03-08-05-advanced-usage/03-08-05-01-configure-request/doc-03-08-05-01.component';
import { Doc03080502Component } from './03-08-05-advanced-usage/03-08-05-02-debouncing-requests/doc-03-08-05-02.component';

@NgModule({
  declarations: [
    Doc0308Component,
    Doc030801Component,
    Doc030802Component,
    Doc030803Component,
    Doc030804Component,
    Doc030805Component,
    Doc03080501Component,
    Doc03080502Component,
  ],
  imports: [Doc0308RoutingModule, CommonModule, FormsModule, SharedModule],
})
export class Doc0308Module {}
