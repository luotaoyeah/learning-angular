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
import { Doc0507030101Component } from './05-07-testing/05-07-03-component-test-basics/05-07-03-01-component-class-testing/doc-05-07-03-01-01/doc-05-07-03-01-01.component';
import { Doc0507030102Component } from './05-07-testing/05-07-03-component-test-basics/05-07-03-01-component-class-testing/doc-05-07-03-01-02/doc-05-07-03-01-02.component';
import { Doc0507030103Component } from './05-07-testing/05-07-03-component-test-basics/05-07-03-01-component-class-testing/doc-05-07-03-01-03/doc-05-07-03-01-03.component';
import { Doc0507030201Component } from './05-07-testing/05-07-03-component-test-basics/05-07-03-02-component-dom-testing/doc-05-07-03-02-01/doc-05-07-03-02-01.component';
import { Doc050704Component } from './05-07-testing/05-07-04-component-test-scenarios/doc-05-07-04.component';
import { Doc0507040101Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-01-component-binding/doc-05-07-04-01-01/doc-05-07-04-01-01.component';
import { Doc0507040102Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-01-component-binding/doc-05-07-04-01-02/doc-05-07-04-01-02.component';
import { Doc0507040103Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-01-component-binding/doc-05-07-04-01-03/doc-05-07-04-01-03.component';
import { Doc05070402Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-02-component-with-external-files/doc-05-07-04-02.component';
import { Doc05070403Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-03-component-with-a-dependency/doc-05-07-04-03.component';
import { Doc05070404Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-04-component-with-async-service/doc-05-07-04-04.component';
import { Doc05070405Component } from './05-07-testing/05-07-04-component-test-scenarios/05-07-04-05-component-marble-tests/doc-05-07-04-05.component';

@NgModule({
  declarations: [
    Doc05Component,
    Doc0507Component,
    Doc050701Component,
    /* 05-07-02 */
    Doc050702Component,
    /* 05-07-03 */
    Doc050703Component,
    Doc0507030101Component,
    Doc0507030102Component,
    Doc0507030103Component,
    Doc0507030201Component,
    /* 05-07-04 */
    Doc050704Component,
    Doc0507040101Component,
    Doc0507040102Component,
    Doc0507040103Component,
    Doc05070402Component,
    Doc05070403Component,
    Doc05070404Component,
    Doc05070405Component,
  ],
  imports: [CommonModule, FormsModule, SharedModule, Doc05RoutingModule],
})
export class Doc05Module {}
