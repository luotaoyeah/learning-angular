import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc03020201Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-01-html-in-template/doc-03-02-02-01.component';
import { Doc0302020201Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-02-interpolation-and-template-expression/03-02-02-02-01-interpolation/doc-03-02-02-02-01.component';
import { Doc0302020202Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-02-interpolation-and-template-expression/03-02-02-02-02-template-expression/doc-03-02-02-02-02.component';
import { Doc0302020203Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-02-interpolation-and-template-expression/03-02-02-02-03-expression-context/doc-03-02-02-02-03.component';
import { Doc0302020204Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-02-interpolation-and-template-expression/03-02-02-02-04-expression-guideline/doc-03-02-02-02-04.component';
import { Doc03020202Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-02-interpolation-and-template-expression/doc-03-02-02-02.component';
import { Doc0302020301Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-03-template-statement/03-02-02-03-01-statement-context/doc-03-02-02-03-01.component';
import { Doc03020203Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-03-template-statement/doc-03-02-02-03.component';
import { Doc030202070101Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-07-event-binding/03-02-02-07-01-target-event/doc-03-02-02-07-01-01.component';
import { Doc0302020701Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-07-event-binding/03-02-02-07-01-target-event/doc-03-02-02-07-01.component';
import { Doc030202070201Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-07-event-binding/03-02-02-07-02-$event-and-event-handling-statements/doc-03-02-02-07-02-01.component';
import { Doc0302020702Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-07-event-binding/03-02-02-07-02-$event-and-event-handling-statements/doc-03-02-02-07-02.component';
import { Doc030202070301Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-07-event-binding/03-02-02-07-03-custom-events-with-eventemitter/doc-03-02-02-07-03-01.component';
import { Doc0302020703Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-07-event-binding/03-02-02-07-03-custom-events-with-eventemitter/doc-03-02-02-07-03.component';
import { Doc03020207Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-07-event-binding/doc-03-02-02-07.component';
import { Doc0302020801Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-08-two-way-binding/doc-03-02-02-08-01.component';
import { Doc03020208Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-08-two-way-binding/doc-03-02-02-08.component';
import { Doc0302021101Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-11-template-reference-variable/doc-03-02-02-11-01.component';
import { Doc03020211Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-11-template-reference-variable/doc-03-02-02-11.component';
import { Doc0302021201Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-12-input-and-output-properties/03-02-02-12-01-binding-to-a-different-component/doc-03-02-02-12-01.component';
import { Doc030202120201Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-12-input-and-output-properties/03-02-02-12-02-declaring-input-and-output-properties/doc-03-02-02-12-02-01.component';
import { Doc030202120202Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-12-input-and-output-properties/03-02-02-12-02-declaring-input-and-output-properties/doc-03-02-02-12-02-02.component';
import { Doc0302021202Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-12-input-and-output-properties/03-02-02-12-02-declaring-input-and-output-properties/doc-03-02-02-12-02.component';
import { Doc030202120301Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-12-input-and-output-properties/03-02-02-12-03-aliasing-input-output-properties/doc-03-02-02-12-03-01.component';
import { Doc0302021203Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-12-input-and-output-properties/03-02-02-12-03-aliasing-input-output-properties/doc-03-02-02-12-03.component';
import { Doc03020212Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-12-input-and-output-properties/doc-03-02-02-12.component';
import { Doc0302021301Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-13-template-expression-operators/03-02-02-13-01-the-pipe-operator/doc-03-02-02-13-01.component';
import { Doc0302021302Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-13-template-expression-operators/03-02-02-13-02-safe-navigation-operator/doc-03-02-02-13-02.component';
import { Doc0302021303Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-13-template-expression-operators/03-02-02-13-03-the-non-null-assertion-operator/doc-03-02-02-13-03.component';
import { Doc03020213Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-13-template-expression-operators/doc-03-02-02-13.component';
import { Doc0302021401Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-14-built-in-template-functions/03-02-02-14-01-the-pipe-operator/doc-03-02-02-14-01.component';
import { Doc03020214Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-14-built-in-template-functions/doc-03-02-02-14.component';
import { Doc03030204Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-04-binding-syntax-an-overview/doc-03-03-02-04.component';
import { Doc03030205Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-05-data-binding-and-html/doc-03-03-02-05.component';
import { Doc03030206Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-06-html-attribute-vs-dom-property/doc-03-03-02-06.component';
import { Doc0303020701Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-01-one-way-in/doc-03-03-02-07-01.component';
import { Doc0303020703Directive } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-03-binding-target/directives/doc-03-03-02-07-03.directive';
import { Doc0303020703Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-03-binding-target/doc-03-03-02-07-03.component';
import { Doc0303020704Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-04-avoid-side-effects/doc-03-03-02-07-04.component';
import { Doc0303020705Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-05-return-the-proper-type/doc-03-03-02-07-05.component';
import { Doc0303020706Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-06-remember-the-brackets/doc-03-03-02-07-06.component';
import { Doc0303020707Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-07-one-time-string-initialization/doc-03-03-02-07-07.component';
import { Doc0303020708Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-08-property-binding-vs-interpolation/doc-03-03-02-07-08.component';
import { Doc0303020709Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/03-03-02-07-09-content-security/doc-03-03-02-07-09.component';
import { Doc03030207Component } from '@app/views/doc/guide/main-concepts/templates/03-03-02-07-property-binding/doc-03-03-02-07.component';
import { PipesModule } from '@app/views/doc/guide/main-concepts/templates/pipes/pipes.module';
import { AttributeBindingModule } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/attribute-binding.module';
import { TemplatesRoutingModule } from '@app/views/doc/guide/main-concepts/templates/templates.routing.module';
import { TemplatesComponent } from '@app/views/doc/guide/main-concepts/templates/templates.component';

@NgModule({
  declarations: [
    TemplatesComponent,
    Doc03020201Component,
    Doc03020202Component,
    Doc0302020201Component,
    Doc0302020202Component,
    Doc0302020203Component,
    Doc0302020204Component,
    Doc03020203Component,
    Doc0302020301Component,
    Doc03030204Component,
    Doc03030205Component,
    Doc03030206Component,
    Doc03030207Component,
    Doc0303020701Component,
    Doc0303020703Component,
    Doc0303020704Component,
    Doc0303020705Component,
    Doc0303020706Component,
    Doc0303020707Component,
    Doc0303020708Component,
    Doc0303020709Component,
    Doc03020207Component,
    Doc0302020701Component,
    Doc030202070101Component,
    Doc0302020702Component,
    Doc030202070201Component,
    Doc0302020703Component,
    Doc030202070301Component,
    Doc03020208Component,
    Doc0302020801Component,
    Doc03020211Component,
    Doc0302021101Component,
    Doc03020212Component,
    Doc0302021201Component,
    Doc0302021202Component,
    Doc030202120201Component,
    Doc030202120202Component,
    Doc0302021203Component,
    Doc030202120301Component,
    Doc03020213Component,
    Doc0302021301Component,
    Doc0302021302Component,
    Doc0302021303Component,
    Doc03020214Component,
    Doc0302021401Component,
    [Doc0303020703Directive],
  ],
  imports: [[SharedModule], TemplatesRoutingModule, PipesModule, AttributeBindingModule],
})
export class TemplatesModule {}
