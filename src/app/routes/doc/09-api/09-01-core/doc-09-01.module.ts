import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0901RoutingModule } from './doc-09-01-routing.module';
import { Doc090102Component } from './09-01-02-primary-entry-point-exports/doc-09-01-02.component';
import { Doc090101Component } from './09-01-01-entry-points/doc-09-01-01.component';
import { Doc09010203Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/doc-09-01-02-03.component';
import { Doc0901020303Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-03/doc-09-01-02-03-03.component';

@NgModule({
  declarations: [
    Doc090101Component,
    Doc090102Component,
    Doc09010203Component,
    Doc0901020303Component,
  ],
  imports: [CommonModule, FormsModule, SharedModule, Doc0901RoutingModule],
})
export class Doc0901Module {}
