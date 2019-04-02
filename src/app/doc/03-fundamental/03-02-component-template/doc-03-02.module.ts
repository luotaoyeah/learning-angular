// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0302RoutingModule } from './doc-03-02-routing.module';
import { Doc030201Component } from './03-02-01-displaying-data/doc-03-02-01.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule, ButtonModule, InputTextModule, MessagesModule, SelectButtonModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { Doc03020101Component } from './03-02-01-displaying-data/03-02-01-01/doc-03-02-01-01.component';
import { Doc03020102Component } from './03-02-01-displaying-data/03-02-01-02/doc-03-02-01-02.component';
import { Doc03020103Component } from './03-02-01-displaying-data/03-02-01-03/doc-03-02-01-03.component';
import { Doc03020104Component } from './03-02-01-displaying-data/03-02-01-04/doc-03-02-01-04.component';
import { Doc03020105Component } from './03-02-01-displaying-data/03-02-01-05/doc-03-02-01-05.component';
import { Doc030202Component } from './03-02-02-template-syntax/doc-03-02-02.component';
import { Doc03020201Component } from './03-02-02-template-syntax/03-02-02-01-html-in-template/doc-03-02-02-01.component';
import { Doc03020202Component } from './03-02-02-template-syntax/03-02-02-02-interpolation-and-template-expression/doc-03-02-02-02.component';
import { Doc0302020201Component } from './03-02-02-template-syntax/03-02-02-02-interpolation-and-template-expression/03-02-02-02-01-interpolation/doc-03-02-02-02-01.component';
import { Doc0302020202Component } from './03-02-02-template-syntax/03-02-02-02-interpolation-and-template-expression/03-02-02-02-02-template-expression/doc-03-02-02-02-02.component';
import { Doc0302020203Component } from './03-02-02-template-syntax/03-02-02-02-interpolation-and-template-expression/03-02-02-02-03-expression-context/doc-03-02-02-02-03.component';
import { Doc0302020204Component } from './03-02-02-template-syntax/03-02-02-02-interpolation-and-template-expression/03-02-02-02-04-expression-guideline/doc-03-02-02-02-04.component';
import { Doc03020203Component } from './03-02-02-template-syntax/03-02-02-03-template-statement/doc-03-02-02-03.component';
import { Doc0302020301Component } from './03-02-02-template-syntax/03-02-02-03-template-statement/03-02-02-03-01-statement-context/doc-03-02-02-03-01.component';
import { Doc03020204Component } from './03-02-02-template-syntax/03-02-02-04-binding-syntax-an-overview/doc-03-02-02-04.component';
import { Doc03020205Component } from './03-02-02-template-syntax/03-02-02-05-property-binding/doc-03-02-02-05.component';
import { Doc0302020501Component } from './03-02-02-template-syntax/03-02-02-05-property-binding/03-02-02-05-01-one-way-in/doc-03-02-02-05-01.component';
import { Doc0302020502Component } from './03-02-02-template-syntax/03-02-02-05-property-binding/03-02-02-05-02-binding-target/doc-03-02-02-05-02.component';
import { Doc0302020503Component } from './03-02-02-template-syntax/03-02-02-05-property-binding/03-02-02-05-03-avoid-side-effects/doc-03-02-02-05-03.component';
import { Doc0302020504Component } from './03-02-02-template-syntax/03-02-02-05-property-binding/03-02-02-05-04-one-time-string-initialization/doc-03-02-02-05-04.component';
import { Doc030202050401Component } from './03-02-02-template-syntax/03-02-02-05-property-binding/03-02-02-05-04-one-time-string-initialization/doc-03-02-02-05-04-01.component';
import { Doc0302020505Component } from './03-02-02-template-syntax/03-02-02-05-property-binding/03-02-02-05-05-property-binding-or-interpolation/doc-03-02-02-05-05.component';
import { Doc03020206Component } from './03-02-02-template-syntax/03-02-02-06-attribute-class-and-style-bindings/doc-03-02-02-06.component';
import { Doc0302020601Component } from './03-02-02-template-syntax/03-02-02-06-attribute-class-and-style-bindings/03-02-02-06-01-attribute-binding/doc-03-02-02-06-01.component';
import { Doc0302020602Component } from './03-02-02-template-syntax/03-02-02-06-attribute-class-and-style-bindings/03-02-02-06-02-class-binding/doc-03-02-02-06-02.component';
import { Doc0302020603Component } from './03-02-02-template-syntax/03-02-02-06-attribute-class-and-style-bindings/03-02-02-06-03-style-binding/doc-03-02-02-06-03.component';
import { Doc03020207Component } from './03-02-02-template-syntax/03-02-02-07-event-binding/doc-03-02-02-07.component';
import { Doc0302020701Component } from './03-02-02-template-syntax/03-02-02-07-event-binding/03-02-02-07-01-target-event/doc-03-02-02-07-01.component';
import { Doc030202070101Component } from './03-02-02-template-syntax/03-02-02-07-event-binding/03-02-02-07-01-target-event/doc-03-02-02-07-01-01.component';
import { Doc0302020702Component } from './03-02-02-template-syntax/03-02-02-07-event-binding/03-02-02-07-02-$event-and-event-handling-statements/doc-03-02-02-07-02.component';
import { Doc030202070201Component } from './03-02-02-template-syntax/03-02-02-07-event-binding/03-02-02-07-02-$event-and-event-handling-statements/doc-03-02-02-07-02-01.component';
import { Doc030202070301Component } from './03-02-02-template-syntax/03-02-02-07-event-binding/03-02-02-07-03-custom-events-with-eventemitter/doc-03-02-02-07-03-01.component';
import { Doc0302020703Component } from './03-02-02-template-syntax/03-02-02-07-event-binding/03-02-02-07-03-custom-events-with-eventemitter/doc-03-02-02-07-03.component';
import { Doc03020208Component } from './03-02-02-template-syntax/03-02-02-08-two-way-binding/doc-03-02-02-08.component';
import { Doc0302020801Component } from './03-02-02-template-syntax/03-02-02-08-two-way-binding/doc-03-02-02-08-01.component';
import { FormsModule } from '@angular/forms';
import { Doc03020209Component } from './03-02-02-template-syntax/03-02-02-09-built-in-attribute-directives/doc-03-02-02-09.component';
import { Doc0302020901Component } from './03-02-02-template-syntax/03-02-02-09-built-in-attribute-directives/03-02-02-09-01-ngclass/doc-03-02-02-09-01.component';
import { Doc0302020902Component } from './03-02-02-template-syntax/03-02-02-09-built-in-attribute-directives/03-02-02-09-02-ngstyle/doc-03-02-02-09-02.component';
import { Doc0302020903Component } from './03-02-02-template-syntax/03-02-02-09-built-in-attribute-directives/03-02-02-09-03-ngmodel/doc-03-02-02-09-03.component';
import { Doc03020210Component } from './03-02-02-template-syntax/03-02-02-10-built-in-structural-directives/doc-03-02-02-10.component';
import { Doc0302021001Component } from './03-02-02-template-syntax/03-02-02-10-built-in-structural-directives/03-02-02-10-01-ngif/doc-03-02-02-10-01.component';
import { Doc030202100101Component } from './03-02-02-template-syntax/03-02-02-10-built-in-structural-directives/03-02-02-10-01-ngif/doc-03-02-02-10-01-01.component';
import { Doc0302021002Component } from './03-02-02-template-syntax/03-02-02-10-built-in-structural-directives/03-02-02-10-02-ngfor/doc-03-02-02-10-02.component';
import { Doc030202100201Component } from './03-02-02-template-syntax/03-02-02-10-built-in-structural-directives/03-02-02-10-02-ngfor/doc-03-02-02-10-02-01.component';
import { Doc0302021003Component } from './03-02-02-template-syntax/03-02-02-10-built-in-structural-directives/03-02-02-10-03-template-input-variable/doc-03-02-02-10-03.component';
import { Doc0302021004Component } from './03-02-02-template-syntax/03-02-02-10-built-in-structural-directives/03-02-02-10-04-ngswitch/doc-03-02-02-10-04.component';
import { Doc03020211Component } from './03-02-02-template-syntax/03-02-02-11-template-reference-variable/doc-03-02-02-11.component';
import { Doc0302021101Component } from './03-02-02-template-syntax/03-02-02-11-template-reference-variable/doc-03-02-02-11-01.component';
import { Doc03020212Component } from './03-02-02-template-syntax/03-02-02-12-input-and-output-properties/doc-03-02-02-12.component';
import { Doc0302021201Component } from './03-02-02-template-syntax/03-02-02-12-input-and-output-properties/03-02-02-12-01-binding-to-a-different-component/doc-03-02-02-12-01.component';
import { Doc0302021202Component } from './03-02-02-template-syntax/03-02-02-12-input-and-output-properties/03-02-02-12-02-declaring-input-and-output-properties/doc-03-02-02-12-02.component';
import { Doc030202120201Component } from './03-02-02-template-syntax/03-02-02-12-input-and-output-properties/03-02-02-12-02-declaring-input-and-output-properties/doc-03-02-02-12-02-01.component';
import { Doc030202120202Component } from './03-02-02-template-syntax/03-02-02-12-input-and-output-properties/03-02-02-12-02-declaring-input-and-output-properties/doc-03-02-02-12-02-02.component';
import { Doc0302021203Component } from './03-02-02-template-syntax/03-02-02-12-input-and-output-properties/03-02-02-12-03-aliasing-input-output-properties/doc-03-02-02-12-03.component';
import { Doc030202120301Component } from './03-02-02-template-syntax/03-02-02-12-input-and-output-properties/03-02-02-12-03-aliasing-input-output-properties/doc-03-02-02-12-03-01.component';
import { Doc03020213Component } from './03-02-02-template-syntax/03-02-02-13-template-expression-operators/doc-03-02-02-13.component';
import { Doc0302021301Component } from './03-02-02-template-syntax/03-02-02-13-template-expression-operators/03-02-02-13-01-the-pipe-operator/doc-03-02-02-13-01.component';
import { Doc0302021302Component } from './03-02-02-template-syntax/03-02-02-13-template-expression-operators/03-02-02-13-02-safe-navigation-operator/doc-03-02-02-13-02.component';
import { Doc0302021303Component } from './03-02-02-template-syntax/03-02-02-13-template-expression-operators/03-02-02-13-03-the-non-null-assertion-operator/doc-03-02-02-13-03.component';
import { Doc03020214Component } from './03-02-02-template-syntax/03-02-02-14-built-in-template-functions/doc-03-02-02-14.component';
import { Doc0302021401Component } from './03-02-02-template-syntax/03-02-02-14-built-in-template-functions/03-02-02-14-01-the-pipe-operator/doc-03-02-02-14-01.component';
import { Doc030203Component } from './03-02-03-user-input/doc-03-02-03.component';
import { Doc03020301Component } from './03-02-03-user-input/03-02-03-01-binding-to-user-input-event/doc-03-02-03-01.component';
import { Doc03020302Component } from './03-02-03-user-input/03-02-03-02-get-user-input-from-the-$event-object/doc-03-02-03-02.component';
import { Doc03020303Component } from './03-02-03-user-input/03-02-03-03-get-user-input-from-a-template-reference-variable/doc-03-02-03-03.component';
import { Doc03020304Component } from './03-02-03-user-input/03-02-03-04-key-event-filtering/doc-03-02-03-04.component';
import { Doc03020305Component } from './03-02-03-user-input/03-02-03-05-on-blur/doc-03-02-03-05.component';
import { Doc03020306Component } from './03-02-03-user-input/03-02-03-06-put-it-all-together/doc-03-02-03-06.component';
import { Doc030204Component } from './03-02-04-lifecycle-hooks/doc-03-02-04.component';
import { Doc03020401Component } from './03-02-04-lifecycle-hooks/03-02-04-01-component-lifecycle-hooks-overview/doc-03-02-04-01.component';
import { Doc03020402Component } from './03-02-04-lifecycle-hooks/03-02-04-02-lifecycle-sequence/doc-03-02-04-02.component';
import { Doc03020403Component } from './03-02-04-lifecycle-hooks/03-02-04-03-peek-a-boo/doc-03-02-04-03.component';
import { Doc0302040301Component } from './03-02-04-lifecycle-hooks/03-02-04-03-peek-a-boo/doc-03-02-04-03-01.component';
import { MySpyDirective } from './03-02-04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/doc-03-02-04-04.directive';
import { Doc03020404Component } from './03-02-04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/doc-03-02-04-04.component';
import { Doc0302040401Component } from './03-02-04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/03-02-04-04-01-oninit/doc-03-02-04-04-01.component';
import { Doc0302040402Component } from './03-02-04-lifecycle-hooks/03-02-04-04-spying-oninit-and-ondestroy/03-02-04-04-02-ondestroy/doc-03-02-04-04-02.component';
import { Doc03020405Component } from './03-02-04-lifecycle-hooks/03-02-04-05-onchanges/doc-03-02-04-05.component';
import { Doc0302040501Component } from './03-02-04-lifecycle-hooks/03-02-04-05-onchanges/doc-03-02-04-05-01.component';
import { Doc0302040502Component } from './03-02-04-lifecycle-hooks/03-02-04-05-onchanges/doc-03-02-04-05-02.component';
import { Doc03020406Component } from './03-02-04-lifecycle-hooks/03-02-04-06-docheck/doc-03-02-04-06.component';
import { Doc0302040601Component } from './03-02-04-lifecycle-hooks/03-02-04-06-docheck/doc-03-02-04-06-01.component';
import { Doc03020407Component } from './03-02-04-lifecycle-hooks/03-02-04-07-after-view/doc-03-02-04-07.component';
import { Doc0302040701Component } from './03-02-04-lifecycle-hooks/03-02-04-07-after-view/doc-03-02-04-07-01.component';
import { Doc03020408Component } from './03-02-04-lifecycle-hooks/03-02-04-08-after-content/doc-03-02-04-08.component';
import { Doc0302040801Component } from './03-02-04-lifecycle-hooks/03-02-04-08-after-content/doc-03-02-04-08-01.component';
import { Doc0302040802Component } from './03-02-04-lifecycle-hooks/03-02-04-08-after-content/doc-03-02-04-08-02.component';
import { Doc030205Component } from './03-02-05-component-interaction/doc-03-02-05.component';
import { Doc03020501Component } from './03-02-05-component-interaction/03-02-05-01-pass-data-from-parent-to-child-with-input-binding/doc-03-02-05-01.component';
import { Doc0302050101Component } from './03-02-05-component-interaction/03-02-05-01-pass-data-from-parent-to-child-with-input-binding/doc-03-02-05-01-01.component';
import { Doc03020502Component } from './03-02-05-component-interaction/03-02-05-02-intercept-input-property-changes-with-a-setter/doc-03-02-05-02.component';
import { Doc0302050201Component } from './03-02-05-component-interaction/03-02-05-02-intercept-input-property-changes-with-a-setter/doc-03-02-05-02-01.component';
import { Doc03020503Component } from './03-02-05-component-interaction/03-02-05-03-intercept-input-property-changes-with-ngonchanges/doc-03-02-05-03.component';
import { Doc0302050301Component } from './03-02-05-component-interaction/03-02-05-03-intercept-input-property-changes-with-ngonchanges/doc-03-02-05-03-01.component';
import { Doc03020504Component } from './03-02-05-component-interaction/03-02-05-04-parent-listens-for-child-event/doc-03-02-05-04.component';
import { Doc0302050401Component } from './03-02-05-component-interaction/03-02-05-04-parent-listens-for-child-event/doc-03-02-05-04-01.component';
import { Doc03020505Component } from './03-02-05-component-interaction/03-02-05-05-parent-interacts-with-child-via-local-variable/doc-03-02-05-05.component';
import { Doc0302050501Component } from './03-02-05-component-interaction/03-02-05-05-parent-interacts-with-child-via-local-variable/doc-03-02-05-05-01.component';
import { Doc03020506Component } from './03-02-05-component-interaction/03-02-05-06-parent-calls-an-viewchild/doc-03-02-05-06.component';
import { Doc0302050601Component } from './03-02-05-component-interaction/03-02-05-06-parent-calls-an-viewchild/doc-03-02-05-06-01.component';
import { Doc03020507Component } from './03-02-05-component-interaction/03-02-05-07-parent-and-children-communicate-via-a-service/doc-03-02-05-07.component';
import { Doc0302050701Component } from './03-02-05-component-interaction/03-02-05-07-parent-and-children-communicate-via-a-service/doc-03-02-05-07-01.component';

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
    /* 03-02-02 */
    Doc030202Component,
    Doc03020201Component,
    /* 03-02-02-02 */
    Doc03020202Component,
    Doc0302020201Component,
    Doc0302020202Component,
    Doc0302020203Component,
    Doc0302020204Component,
    /* 03-02-02-03 */
    Doc03020203Component,
    Doc0302020301Component,
    /* 03-02-02-04 */
    Doc03020204Component,
    /* 03-02-02-05 */
    Doc03020205Component,
    Doc0302020501Component,
    Doc0302020502Component,
    Doc0302020503Component,
    Doc0302020504Component,
    Doc030202050401Component,
    Doc0302020505Component,
    /* 03-02-02-06 */
    Doc03020206Component,
    Doc0302020601Component,
    Doc0302020602Component,
    Doc0302020603Component,
    /* 03-02-02-07 */
    Doc03020207Component,
    Doc0302020701Component,
    Doc030202070101Component,
    Doc0302020702Component,
    Doc030202070201Component,
    Doc0302020703Component,
    Doc030202070301Component,
    /* 03-02-02-08 */
    Doc03020208Component,
    Doc0302020801Component,
    /* 03-02-02-09 */
    Doc03020209Component,
    Doc0302020901Component,
    Doc0302020902Component,
    Doc0302020903Component,
    /* 03-02-02-10 */
    Doc03020210Component,
    Doc0302021001Component,
    Doc030202100101Component,
    Doc0302021002Component,
    Doc030202100201Component,
    Doc0302021003Component,
    Doc0302021004Component,
    /* 03-02-02-11 */
    Doc03020211Component,
    Doc0302021101Component,
    /* 03-02-02-12 */
    Doc03020212Component,
    Doc0302021201Component,
    Doc0302021202Component,
    Doc030202120201Component,
    Doc030202120202Component,
    Doc0302021203Component,
    Doc030202120301Component,
    /* 03-02-02-13 */
    Doc03020213Component,
    Doc0302021301Component,
    Doc0302021302Component,
    Doc0302021303Component,
    /* 03-02-02-14 */
    Doc03020214Component,
    Doc0302021401Component,
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
    Doc03020403Component,
    Doc0302040301Component,
    Doc03020404Component,
    MySpyDirective,
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
    /* 03-02-05 */
    Doc030205Component,
    Doc03020501Component,
    Doc0302050101Component,
    Doc03020502Component,
    Doc0302050201Component,
    Doc03020503Component,
    Doc0302050301Component,
    Doc03020504Component,
    Doc0302050401Component,
    Doc03020505Component,
    Doc0302050501Component,
    Doc03020506Component,
    Doc0302050601Component,
    Doc03020507Component,
    Doc0302050701Component
  ],
  imports: [
    CommonModule,
    Doc0302RoutingModule,
    PanelModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    SelectButtonModule,
    MessagesModule,
    InputTextModule
  ]
})
export class Doc0302Module {}
