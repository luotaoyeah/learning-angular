import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc0504Component } from './doc-05-04.component';
import { Doc050401Component } from './05-04-01-setup/doc-05-04-01.component';
import { Doc050402Component } from './05-04-02-service-tests/doc-05-04-02.component';
import { Doc050403Component } from './05-04-03-component-test-basics/doc-05-04-03.component';
import { Doc0504030101Component } from './05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-01/doc-05-04-03-01-01.component';
import { Doc0504030102Component } from './05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-02/doc-05-04-03-01-02.component';
import { Doc0504030103Component } from './05-04-03-component-test-basics/05-04-03-01-component-class-testing/05-04-03-01-03/doc-05-04-03-01-03.component';
import { Doc0504030201Component } from './05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-01/doc-05-04-03-02-01.component';
import { Doc050404Component } from './05-04-04-component-test-scenarios/doc-05-04-04.component';
import { Doc0504040101Component } from './05-04-04-component-test-scenarios/05-04-04-01-component-binding/05-04-04-01-01/doc-05-04-04-01-01.component';
import { Doc0504040102Component } from './05-04-04-component-test-scenarios/05-04-04-01-component-binding/05-04-04-01-02/doc-05-04-04-01-02.component';
import { Doc0504040103Component } from './05-04-04-component-test-scenarios/05-04-04-01-component-binding/05-04-04-01-03/doc-05-04-04-01-03.component';
import { Doc05040402Component } from './05-04-04-component-test-scenarios/05-04-04-02-component-with-external-files/doc-05-04-04-02.component';
import { Doc05040403Component } from './05-04-04-component-test-scenarios/05-04-04-03-component-with-a-dependency/doc-05-04-04-03.component';
import { Doc05040404Component } from './05-04-04-component-test-scenarios/05-04-04-04-component-with-async-service/doc-05-04-04-04.component';
import { Doc05040405Component } from './05-04-04-component-test-scenarios/05-04-04-05-component-marble-tests/doc-05-04-04-05.component';
import { Doc05040406Component } from './05-04-04-component-test-scenarios/05-04-04-06-component-with-inputs-and-outputs/doc-05-04-04-06.component';
import { Doc05040407Component } from './05-04-04-component-test-scenarios/05-04-04-07-component-inside-a-test-host/doc-05-04-04-07.component';
import { Doc05040408Component } from './05-04-04-component-test-scenarios/05-04-04-08-routing-component/doc-05-04-04-08.component';
import { Doc0504040801Component } from './05-04-04-component-test-scenarios/05-04-04-08-routing-component/05-04-04-08-01/doc-05-04-04-08-01.component';
import { Doc05040409Component } from './05-04-04-component-test-scenarios/05-04-04-09-routed-component/doc-05-04-04-09.component';
import { Doc0504040901Component } from './05-04-04-component-test-scenarios/05-04-04-09-routed-component/05-04-04-09-01/doc-05-04-04-09-01.component';
import { Doc05040410Component } from './05-04-04-component-test-scenarios/05-04-04-10-nested-component-tests/doc-05-04-04-10.component';
import { Doc0504041001Component } from './05-04-04-component-test-scenarios/05-04-04-10-nested-component-tests/05-04-04-10-01/doc-05-04-04-10-01.component';
import { Doc0504041002Component } from './05-04-04-component-test-scenarios/05-04-04-10-nested-component-tests/05-04-04-10-02/doc-05-04-04-10-02.component';
import { Doc05040411Component } from './05-04-04-component-test-scenarios/05-04-04-11-components-with-routerlink/doc-05-04-04-11.component';
import { Doc05040412Component } from './05-04-04-component-test-scenarios/05-04-04-12-use-a-page-object/doc-05-04-04-12.component';
import { Doc05040413Component } from './05-04-04-component-test-scenarios/05-04-04-13-calling-compilecomponents/doc-05-04-04-13.component';
import { Doc05040414Component } from './05-04-04-component-test-scenarios/05-04-04-14-setup-with-module-imports/doc-05-04-04-14.component';
import { Doc05040415Component } from './05-04-04-component-test-scenarios/05-04-04-15-override-component-providers/doc-05-04-04-15.component';
import { Doc0504041501Component } from './05-04-04-component-test-scenarios/05-04-04-15-override-component-providers/05-04-04-15-01/doc-05-04-04-15-01.component';
import { Doc0504041502Component } from './05-04-04-component-test-scenarios/05-04-04-15-override-component-providers/05-04-04-15-02/doc-05-04-04-15-02.component';
import { Doc050405Component } from './05-04-05-attribute-directive-testing/doc-05-04-05.component';
import { Doc05040501Directive } from './05-04-05-attribute-directive-testing/directive/doc-05-04-05-01.directive';
import { Doc0504RoutingModule } from './doc-05-04-routing.module';
import { Doc0504030202Component } from './05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-02/doc-05-04-03-02-02.component';
import { Doc0504030203Component } from './05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-03/doc-05-04-03-02-03.component';
import { Doc0504030204Component } from './05-04-03-component-test-basics/05-04-03-02-component-dom-testing/05-04-03-02-04/doc-05-04-03-02-04.component';
import { Doc0504040401Component } from './05-04-04-component-test-scenarios/05-04-04-04-component-with-async-service/05-04-04-04-01/doc-05-04-04-04-01.component';

@NgModule({
  declarations: [
    Doc0504Component,
    Doc050401Component,
    /* 05-04-02 */
    Doc050402Component,
    /* 05-04-03 */
    Doc050403Component,
    Doc0504030101Component,
    Doc0504030102Component,
    Doc0504030103Component,
    Doc0504030201Component,
    Doc0504030202Component,
    Doc0504030203Component,
    Doc0504030204Component,
    /* 05-04-04 */
    Doc050404Component,
    Doc0504040101Component,
    Doc0504040102Component,
    Doc0504040103Component,
    Doc05040402Component,
    Doc05040403Component,
    Doc05040404Component,
    Doc0504040401Component,
    Doc05040405Component,
    Doc05040406Component,
    Doc05040407Component,
    Doc05040408Component,
    Doc0504040801Component,
    Doc05040409Component,
    Doc0504040901Component,
    Doc05040410Component,
    Doc0504041001Component,
    Doc0504041002Component,
    Doc05040411Component,
    Doc05040412Component,
    Doc05040413Component,
    Doc05040414Component,
    Doc05040415Component,
    Doc0504041501Component,
    Doc0504041502Component,
    /* 05-04-05 */
    Doc050405Component,
    [Doc05040501Directive],
  ],
  imports: [SharedModule, Doc0504RoutingModule],
})
export class Doc0504Module {}
