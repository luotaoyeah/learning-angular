import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0305RoutingModule } from './doc-03-05-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';
import { Doc030401Component } from './03-04-01-observables/doc-03-04-01.component';
import { Doc030402Component } from './03-04-02-the-rxjs-library/doc-03-04-02.component';
import { Doc030403Component } from './03-04-03-observables-in-angular/doc-03-04-03.component';
import { Doc030404Component } from './03-04-04-practical-usage/doc-03-04-04.component';
import { Doc030405Component } from './03-04-05-compare-to-other-techniques/doc-03-04-05.component';

@NgModule({
  declarations: [
    Doc030401Component,
    Doc030402Component,
    Doc030403Component,
    Doc030404Component,
    Doc030405Component,
  ],
  imports: [Doc0305RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0305Module {}
