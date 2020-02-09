import { NgModule } from '@angular/core';
import { Doc0309RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/doc-03-09-routing.module';
import { SharedModule } from '@app/shared';
import { Doc0309Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/doc-03-09.component';
import { Doc030801Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-01-getting-json-data/doc-03-08-01.component';
import { Doc030802Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-02-error-handling/doc-03-08-02.component';
import { Doc030803Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-03-requesting-non-json-data/doc-03-08-03.component';
import { Doc030804Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-04-sending-data-to-the-server/doc-03-08-04.component';
import { Doc030805Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-05-advanced-usage/doc-03-08-05.component';
import { Doc03080501Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-05-advanced-usage/03-08-05-01-configure-request/doc-03-08-05-01.component';
import { Doc03080502Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-05-advanced-usage/03-08-05-02-debouncing-requests/doc-03-08-05-02.component';
import { Doc03080503Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-05-advanced-usage/03-08-05-03-intercepting-requests-and-responses/doc-03-08-05-03.component';
import { Doc030806Component } from '@app/views/doc/guide/03-FUNDAMENTALS/09-httpclient/03-08-06-testing-http-requests/doc-03-08-06.component';

@NgModule({
  declarations: [
    Doc0309Component,
    Doc030801Component,
    Doc030802Component,
    Doc030803Component,
    Doc030804Component,
    Doc030805Component,
    Doc03080501Component,
    Doc03080502Component,
    Doc03080503Component,
    Doc030806Component,
  ],
  imports: [SharedModule, Doc0309RoutingModule],
})
export class Doc0309Module {}
