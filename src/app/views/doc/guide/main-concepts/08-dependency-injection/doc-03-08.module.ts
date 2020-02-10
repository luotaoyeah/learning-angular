import { NgModule } from '@angular/core';
import { Doc0308RoutingModule } from '@app/views/doc/guide/main-concepts/08-dependency-injection/doc-03-08-routing.module';
import { SharedModule } from '@app/shared';
import { Doc030701Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-01-angular-dependency-injection/doc-03-07-01.component';
import { Doc030702Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/doc-03-07-02.component';
import { Doc030704Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/doc-03-07-04.component';
import { Doc030703Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/doc-03-07-03.component';
import { Doc030705Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/doc-03-07-05.component';
import { Doc03070201Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/doc-03-07-02-01.component';
import { Doc0307020101Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-01/doc-03-07-02-01-01.component';
import { Doc0307020101Module } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-01/doc-03-07-02-01-01.module';
import { Doc0307020102Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-02/doc-03-07-02-01-02.component';
import { Doc0307020103Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-03/doc-03-07-02-01-03.component';
import { Doc03070202Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/doc-03-07-02-02.component';
import { Doc0307020201Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-01/doc-03-07-02-02-01.component';
import { Doc0307020202Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-02/doc-03-07-02-02-02.component';
import { Doc0307020203Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-03/doc-03-07-02-02-03.component';
import { Doc030702020301Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-03/doc-03-07-02-02-03-01.component';
import { Doc03070202030101Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-03/doc-03-07-02-02-03-01-01.component';
import { Doc03070301Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-01-the-provider-object-literal/doc-03-07-03-01.component';
import { Doc03070302Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-02-alternative-class-providers/doc-03-07-03-02.component';
import { Doc03070303Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-03-value-providers/doc-03-07-03-03.component';
import { Doc0307030301Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-03-value-providers/03-07-03-03-01-non-class-dependencies/doc-03-07-03-03-01.component';
import { Doc03070304Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-04-factory-providers/doc-03-07-03-04.component';
import { Doc03070305Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-05-predefined-tokens-and-multiple-providers/doc-03-07-03-05.component';
import { Doc03070306Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-06-tree-shakable-providers/doc-03-07-03-06.component';
import { Doc03070306Module } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-06-tree-shakable-providers/doc-03-07-03-06.module';
import { Doc03070401Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-01-nested-service-dependencies/doc-03-07-04-01.component';
import { Doc03070402Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-02-limit-service-scope-to-a-component-subtree/doc-03-07-04-02.component';
import { Doc0307040201Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-02-limit-service-scope-to-a-component-subtree/03-07-04-02-01/doc-03-07-04-02-01.component';
import { Doc03070403Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/doc-03-07-04-03.component';
import { Doc0307040301Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-01-optional/doc-03-07-04-03-01.component';
import { Doc0307040302Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-02-host/doc-03-07-04-03-02.component';
import { Doc0307040303Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-03-inject/doc-03-07-04-03-03.component';
import { Doc0307040304Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-04-self/doc-03-07-04-03-04.component';
import { Doc030704030401Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-04-self/doc-03-07-04-03-04-01.component';
import { Doc03070404Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-04-inject-the-components-dom-element/doc-03-07-04-04.component';
import { Doc03070404Directive } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-04-inject-the-components-dom-element/directive/doc-03-07-04-04.directive';
import { Doc03070405Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-05-define-dependencies-with-providers/doc-03-07-04-05.component';
import { Doc03070406Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-06-provider-token-alternatives/doc-03-07-04-06.component';
import { Doc0307040601Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-06-provider-token-alternatives/03-07-04-06-01/doc-03-07-04-06-01.component';
import { Doc0307040602Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-06-provider-token-alternatives/03-07-04-06-02/doc-03-07-04-06-02.component';
import { Doc03070407Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-07-inject-into-a-derived-class/doc-03-07-04-07.component';
import { Doc0307040701Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-07-inject-into-a-derived-class/doc-03-07-04-07-01.component';
import { Doc03070408Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-08-forwardref/doc-03-07-04-08.component';
import { Doc03070501Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-01-find-a-parent-component-of-known-type/doc-03-07-05-01.component';
import { Doc0307050101Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-01-find-a-parent-component-of-known-type/doc-03-07-05-01-01.component';
import { Doc03070502Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-02-find-a-parent-by-its-class-interface/doc-03-07-05-02.component';
import { Doc0307050201Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-02-find-a-parent-by-its-class-interface/doc-03-07-05-02-01.component';
import { Doc03070503Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-03-find-a-parent-in-a-tree-with-skipself/doc-03-07-05-03.component';
import { Doc0307050301Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-03-find-a-parent-in-a-tree-with-skipself/doc-03-07-05-03-01.component';
import { Doc0307050302Component } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-03-find-a-parent-in-a-tree-with-skipself/doc-03-07-05-03-02.component';

@NgModule({
  declarations: [
    Doc030701Component,
    Doc030702Component,
    Doc03070201Component,
    Doc0307020101Component,
    Doc0307020102Component,
    Doc0307020103Component,
    Doc03070202Component,
    Doc0307020201Component,
    Doc0307020202Component,
    Doc0307020203Component,
    Doc030702020301Component,
    Doc03070202030101Component,
    Doc030703Component,
    Doc03070301Component,
    Doc03070302Component,
    Doc03070303Component,
    Doc0307030301Component,
    Doc03070304Component,
    Doc03070305Component,
    Doc03070306Component,
    Doc030704Component,
    Doc03070401Component,
    Doc03070402Component,
    Doc0307040201Component,
    Doc03070403Component,
    Doc0307040301Component,
    Doc0307040302Component,
    Doc0307040303Component,
    Doc0307040304Component,
    Doc030704030401Component,
    Doc03070404Component,
    Doc03070404Directive,
    Doc03070405Component,
    Doc03070406Component,
    Doc0307040601Component,
    Doc0307040602Component,
    Doc03070407Component,
    Doc0307040701Component,
    Doc03070408Component,
    Doc030705Component,
    Doc03070501Component,
    Doc0307050101Component,
    Doc03070502Component,
    Doc0307050201Component,
    Doc03070503Component,
    Doc0307050301Component,
    Doc0307050302Component,
  ],
  imports: [Doc0308RoutingModule, SharedModule, Doc0307020101Module, Doc03070306Module],
  entryComponents: [],
})
export class Doc0308Module {}
