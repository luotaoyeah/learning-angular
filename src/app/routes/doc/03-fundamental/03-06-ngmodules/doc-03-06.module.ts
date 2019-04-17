import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0306RoutingModule } from './doc-03-06-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc030601Component } from './03-06-01-ngmodules-introduction/doc-03-06-01.component';
import { Doc030602Component } from './03-06-02-ngmodule-vs-jsmodule/doc-03-06-02.component';
import { Doc030603Component } from './03-06-03-frequent-ngmodules/doc-03-06-03.component';
import { Doc030604Component } from './03-06-04-module-types/doc-03-06-04.component';
import { Doc030605Component } from './03-06-05-entry-components/doc-03-06-05.component';
import { Doc030606Component } from './03-06-06-feature-modules/doc-03-06-06.component';
import { Doc030607Component } from './03-06-07-providers/doc-03-06-07.component';
import { Doc030608Component } from './03-06-08-singleton-services/doc-03-06-08.component';
import { Doc030609Component } from './03-06-09-lazy-loading-ngmodules/doc-03-06-09.component';
import { Doc030610Component } from './03-06-10-sharing-ngmodules/doc-03-06-10.component';
import { Doc030611Component } from './03-06-11-ngmodule-api/doc-03-06-11.component';
import { Doc030612Component } from './03-06-12-ngmodule-faq/doc-03-06-12.component';

@NgModule({
  declarations: [
    Doc030601Component,
    Doc030602Component,
    Doc030603Component,
    Doc030604Component,
    Doc030605Component,
    Doc030606Component,
    Doc030607Component,
    Doc030608Component,
    Doc030609Component,
    Doc030610Component,
    Doc030611Component,
    Doc030612Component,
  ],
  imports: [Doc0306RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0306Module {}
