import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Doc05Component } from './doc-05.component';
import { Doc05RoutingModule } from './doc-05-routing.module';
import { Doc050701Component } from './05-07-testing/05-07-01-setup/doc-05-07-01.component';
import { SharedModule } from '@shared';
import { Doc0507Component } from './05-07-testing/doc-05-07.component';
import { Doc050702Component } from './05-07-testing/05-07-02-service-tests/doc-05-07-02.component';
import { Doc050703Component } from './05-07-testing/05-07-03-component-test-basics/doc-05-07-03.component';
import { Doc05070301Component } from './05-07-testing/05-07-03-component-test-basics/05-07-03-01-component-class-testing/doc-05-07-03-01.component';

@NgModule({
  declarations: [
    Doc05Component,
    Doc0507Component,
    Doc050701Component,
    /* 05-07-02 */
    Doc050702Component,
    /* 05-07-03 */
    Doc050703Component,
    Doc05070301Component,
  ],
  imports: [CommonModule, FormsModule, SharedModule, Doc05RoutingModule],
})
export class Doc05Module {}
