import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Doc0902RoutingModule } from './doc-09-02-routing.module';
import { Doc090202Component } from './09-02-02-primary-entry-point-exports/doc-09-02-02.component';
import { Doc09020206Component } from './09-02-02-primary-entry-point-exports/09-02-02-06-pipes/doc-09-02-02-06.component';
import { Doc0902020601Component } from './09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-01-async-pipe/doc-09-02-02-06-01.component';
import { Doc0902020602Component } from './09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-02-currency-pipe/doc-09-02-02-06-02.component';

@NgModule({
  declarations: [
    Doc090202Component,
    Doc09020206Component,
    Doc0902020601Component,
    Doc0902020602Component,
  ],
  imports: [Doc0902RoutingModule, SharedModule],
})
export class Doc0902Module {}
