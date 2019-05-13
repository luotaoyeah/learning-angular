import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Doc0402RoutingModule } from './doc-04-02-routing.module';
import { Doc0402Component } from './doc-04-02.component';
import { Doc040201Component } from './04-02-01-angular-and-i18n/doc-04-02-01.component';
import { Doc040202Component } from './04-02-02-setting-up-the-locale-of-your-app/doc-04-02-02.component';
import { Doc040203Component } from './04-02-03-i18n-pipes/doc-04-02-03.component';

@NgModule({
  declarations: [
    Doc0402Component,
    Doc040201Component,
    Doc040202Component,
    Doc040203Component,
  ],
  imports: [Doc0402RoutingModule, SharedModule],
})
export class Doc0402Module {}
