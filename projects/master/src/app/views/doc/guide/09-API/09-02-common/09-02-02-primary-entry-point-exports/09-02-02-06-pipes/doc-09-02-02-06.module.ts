import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc09020206Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/doc-09-02-02-06.component';
import { Doc0902020601Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-01-async-pipe/doc-09-02-02-06-01.component';
import { Doc0902020602Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-02-currency-pipe/doc-09-02-02-06-02.component';
import { Doc0902020603Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-03-date-pipe/doc-09-02-02-06-03.component';
import { Doc090202060301Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-03-date-pipe/09-02-02-06-03-01/doc-09-02-02-06-03-01.component';
import { Doc090202060302Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-03-date-pipe/09-02-02-06-03-02/doc-09-02-02-06-03-02.component';
import { Doc090202060303Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-03-date-pipe/09-02-02-06-03-03/doc-09-02-02-06-03-03.component';
import { Doc090202060304Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-03-date-pipe/09-02-02-06-03-04/doc-09-02-02-06-03-04.component';
import { Doc090202060305Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-03-date-pipe/09-02-02-06-03-05/doc-09-02-02-06-03-05.component';
import { Doc0902020604Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-04-decimal-pipe/doc-09-02-02-06-04.component';
import { Doc090202060401Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-04-decimal-pipe/09-02-02-06-04-01/doc-09-02-02-06-04-01.component';
import { Doc090202060402Component } from '@app/views/doc/guide/09-API/09-02-common/09-02-02-primary-entry-point-exports/09-02-02-06-pipes/09-02-02-06-04-decimal-pipe/09-02-02-06-04-02/doc-09-02-02-06-04-02.component';

@NgModule({
  declarations: [
    Doc09020206Component,
    Doc0902020601Component,
    Doc0902020602Component,
    Doc0902020603Component,
    Doc090202060301Component,
    Doc090202060302Component,
    Doc090202060303Component,
    Doc090202060304Component,
    Doc090202060305Component,
    Doc0902020604Component,
    Doc090202060401Component,
    Doc090202060402Component,
  ],
  imports: [SharedModule],
  exports: [Doc09020206Component],
})
export class Doc09020206Module {}
