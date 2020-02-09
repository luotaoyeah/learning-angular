import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030305RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/doc-03-03-05-routing.module';
import { Doc030305Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/doc-03-03-05.component';
import { Doc03030501Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/01-pass-data-from-parent-to-child-with-input-binding/doc-03-03-05-01.component';
import { Doc0303050101Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/01-pass-data-from-parent-to-child-with-input-binding/doc-03-03-05-01.01.component';
import { Doc03030502Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/02-intercept-input-property-changes-with-a-setter/doc-03-03-05-02.component';
import { Doc0303050201Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/02-intercept-input-property-changes-with-a-setter/doc-03-03-05-02.01.component';
import { Doc03030503Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/03-intercept-input-property-changes-with-ngonchanges/doc-03-03-05-03.component';
import { Doc0303050301Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/03-intercept-input-property-changes-with-ngonchanges/doc-03-03-05-03.01.component';
import { Doc03030504Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/04-parent-listens-for-child-event/doc-03-03-05-04.component';
import { Doc0303050401Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/04-parent-listens-for-child-event/doc-03-03-05-04.01.component';
import { Doc03030505Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/05-parent-interacts-with-child-via-local-variable/doc-03-03-05-05.component';
import { Doc0303050501Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/05-parent-interacts-with-child-via-local-variable/doc-03-03-05-05.01.component';
import { Doc03030506Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/06-parent-calls-an-viewchild/doc-03-03-05-06.component';
import { Doc0303050601Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/06-parent-calls-an-viewchild/doc-03-03-05-06.01.component';
import { Doc03030507Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/07-parent-and-children-communicate-via-a-service/doc-03-03-05-07.component';
import { Doc0303050701Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/05-component-interaction/07-parent-and-children-communicate-via-a-service/doc-03-03-05-07.01.component';

@NgModule({
  declarations: [
    Doc030305Component,
    Doc03030501Component,
    Doc0303050101Component,
    Doc03030502Component,
    Doc0303050201Component,
    Doc03030503Component,
    Doc0303050301Component,
    Doc03030504Component,
    Doc0303050401Component,
    Doc03030505Component,
    Doc0303050501Component,
    Doc03030506Component,
    Doc0303050601Component,
    Doc03030507Component,
    Doc0303050701Component,
  ],
  imports: [SharedModule, Doc030305RoutingModule],
})
export class Doc030305Module {}
