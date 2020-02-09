// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { Doc0303RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/doc-03-03-routing.module';
import { Doc030201Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/01-displaying-data/doc-03-02-01.component';
import { Doc03020101Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/01-displaying-data/03-02-01-01/doc-03-02-01-01.component';
import { Doc03020102Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/01-displaying-data/03-02-01-02/doc-03-02-01-02.component';
import { Doc03020103Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/01-displaying-data/03-02-01-03/doc-03-02-01-03.component';
import { Doc03020104Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/01-displaying-data/03-02-01-04/doc-03-02-01-04.component';
import { Doc03020105Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/01-displaying-data/03-02-01-05/doc-03-02-01-05.component';
import { Doc030203Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/03-user-input/doc-03-02-03.component';
import { Doc03020301Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/03-user-input/03-02-03-01-binding-to-user-input-event/doc-03-02-03-01.component';
import { Doc03020302Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/03-user-input/03-02-03-02-get-user-input-from-the-$event-object/doc-03-02-03-02.component';
import { Doc03020303Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/03-user-input/03-02-03-03-get-user-input-from-a-template-reference-variable/doc-03-02-03-03.component';
import { Doc03020304Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/03-user-input/03-02-03-04-key-event-filtering/doc-03-02-03-04.component';
import { Doc03020305Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/03-user-input/03-02-03-05-on-blur/doc-03-02-03-05.component';
import { Doc03020306Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/03-user-input/03-02-03-06-put-it-all-together/doc-03-02-03-06.component';
import { Doc030204Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/doc-03-02-04.component';
import { Doc03020401Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-01-component-lifecycle-hooks-overview/doc-03-02-04-01.component';
import { Doc03020402Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-02-lifecycle-sequence/doc-03-02-04-02.component';
import { Doc03020403Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-03-peek-a-boo/doc-03-02-04-03.component';
import { Doc0302040301Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-03-peek-a-boo/doc-03-02-04-03-01.component';
import { MySpyDirective } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/doc-03-02-04-04.directive';
import { Doc03020404Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/doc-03-02-04-04.component';
import { Doc0302040401Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/03-02-04-04-01-oninit/doc-03-02-04-04-01.component';
import { Doc0302040402Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/03-02-04-04-02-ondestroy/doc-03-02-04-04-02.component';
import { Doc03020405Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-05-onchanges/doc-03-02-04-05.component';
import { Doc0302040501Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-05-onchanges/doc-03-02-04-05-01.component';
import { Doc0302040502Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-05-onchanges/doc-03-02-04-05-02.component';
import { Doc03020406Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-06-docheck/doc-03-02-04-06.component';
import { Doc0302040601Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-06-docheck/doc-03-02-04-06-01.component';
import { Doc03020407Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-07-after-view/doc-03-02-04-07.component';
import { Doc0302040701Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-07-after-view/doc-03-02-04-07-01.component';
import { Doc03020408Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-08-after-content/doc-03-02-04-08.component';
import { Doc0302040801Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-08-after-content/doc-03-02-04-08-01.component';
import { Doc0302040802Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-08-after-content/doc-03-02-04-08-02.component';
import { Doc030209Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/doc-03-02-09.component';
import { Doc03020901Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-01-directives-overview/doc-03-02-09-01.component';
import { Doc03020902Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-02-build-a-simple-attribute-directive/doc-03-02-09-02.component';
import { HighlightDirective } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-02-build-a-simple-attribute-directive/directive/highlight.directive';
import { Doc03020903Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-03-respond-to-user-initiated-events/doc-03-02-09-03.component';
import { Highlight02Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-03-respond-to-user-initiated-events/directive/highlight-02.directive';
import { Highlight04Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-04-pass-values-into-the-directive-with-an-input-data-binding/directive/highlight-04.directive';
import { Doc03020904Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-04-pass-values-into-the-directive-with-an-input-data-binding/doc-03-02-09-04.component';
import { Highlight05Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-05-bind-to-a-second-property/directive/highlight-05.directive';
import { Doc03020905Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-05-bind-to-a-second-property/doc-03-02-09-05.component';
import { SharedModule } from '@app/shared';
import { Doc0302040201Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-02-lifecycle-sequence/03-02-04-02-01-ngonchanges/doc-03-02-04-02-01.component';
import { Doc0302040202Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/04-lifecycle-hooks/03-02-04-02-lifecycle-sequence/03-02-04-02-02-ngoninit/doc-03-02-04-02-02.component';
import { Doc0302090201Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-02-build-a-simple-attribute-directive/directive/doc-03-02-09-02-01.directive';
import { Doc0302090301Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-03-respond-to-user-initiated-events/directive/doc-03-02-09-03-01.directive';
import { Doc0302090401Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-04-pass-values-into-the-directive-with-an-input-data-binding/directive/doc-03-02-09-04-01.directive';
import { Doc0302090402Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-04-pass-values-into-the-directive-with-an-input-data-binding/directive/doc-03-02-09-04-02.directive';
import { Doc0302090403Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-04-pass-values-into-the-directive-with-an-input-data-binding/directive/doc-03-02-09-04-03.directive';
import { Doc0302090404Directive } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/09-attribute-directives/03-02-09-04-pass-values-into-the-directive-with-an-input-data-binding/directive/doc-03-02-09-04-04.directive';
import { Doc030302Module } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/02-template-syntax/doc-03-03-02.module';
import { Doc030306Module } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/06-component-styles/doc-03-03-06.module';
import { Doc030307Module } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/07-dynamic-components/doc-03-03-07.module';
import { Doc030310Module } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/doc-03-03-10.module';
import { Doc030211Module } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/11-pipes/doc-03-02-11.module';
import { Doc030308Module } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/08-angular-elements/doc-03-03-08.module';
import { Doc030305Module } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/doc-03-03-05.module';

// tslint:enable:max-line-length

@NgModule({
  declarations: [
    /* 03-02-01 */
    Doc030201Component,
    Doc03020101Component,
    Doc03020102Component,
    Doc03020103Component,
    Doc03020104Component,
    Doc03020105Component,
    /* 03-02-03 */
    Doc030203Component,
    Doc03020301Component,
    Doc03020302Component,
    Doc03020303Component,
    Doc03020304Component,
    Doc03020305Component,
    Doc03020306Component,
    /* 03-02-04 */
    Doc030204Component,
    Doc03020401Component,
    Doc03020402Component,
    Doc0302040201Component,
    Doc0302040202Component,
    Doc03020403Component,
    Doc0302040301Component,
    Doc03020404Component,
    Doc0302040401Component,
    Doc0302040402Component,
    Doc03020405Component,
    Doc0302040501Component,
    Doc0302040502Component,
    Doc03020406Component,
    Doc0302040601Component,
    Doc03020407Component,
    Doc0302040701Component,
    Doc03020408Component,
    Doc0302040801Component,
    Doc0302040802Component,
    /* 03-02-09 */
    Doc030209Component,
    Doc03020901Component,
    Doc03020902Component,
    Doc03020903Component,
    Doc03020904Component,
    Doc03020905Component,
    [
      MySpyDirective,
      HighlightDirective,
      Highlight02Directive,
      Highlight04Directive,
      Highlight05Directive,
      Doc0302090201Directive,
      Doc0302090301Directive,
      Doc0302090401Directive,
      Doc0302090402Directive,
      Doc0302090403Directive,
      Doc0302090404Directive,
    ],
  ],
  imports: [
    Doc0303RoutingModule,
    SharedModule,
    Doc030302Module,
    Doc030305Module,
    Doc030306Module,
    Doc030307Module,
    Doc030308Module,
    Doc030310Module,
    Doc030211Module,
  ],
})
export class Doc0303Module {}
