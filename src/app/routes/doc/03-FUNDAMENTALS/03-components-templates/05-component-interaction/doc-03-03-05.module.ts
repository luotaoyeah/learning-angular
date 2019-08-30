import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030305RoutingModule } from './doc-03-03-05-routing.module';
import { Doc030305Component } from './doc-03-03-05.component';
import { Doc03030501Component } from './01-pass-data-from-parent-to-child-with-input-binding/doc-03-03-05-01.component';
import { Doc0302050101Component } from './01-pass-data-from-parent-to-child-with-input-binding/doc-03-02-05-01-01.component';
import { Doc03030502Component } from './02-intercept-input-property-changes-with-a-setter/doc-03-03-05-02.component';
import { Doc0303050201Component } from './02-intercept-input-property-changes-with-a-setter/doc-03-03-05-02-01.component';
import { Doc03030503Component } from './03-intercept-input-property-changes-with-ngonchanges/doc-03-03-05-03.component';
import { Doc0303050301Component } from './03-intercept-input-property-changes-with-ngonchanges/doc-03-03-05-03-01.component';
import { Doc03030504Component } from './04-parent-listens-for-child-event/doc-03-03-05-04.component';
import { Doc0303050401Component } from './04-parent-listens-for-child-event/doc-03-03-05-04-01.component';
import { Doc03030505Component } from './05-parent-interacts-with-child-via-local-variable/doc-03-03-05-05.component';
import { Doc0303050501Component } from './05-parent-interacts-with-child-via-local-variable/doc-03-03-05-05-01.component';
import { Doc03030506Component } from './06-parent-calls-an-viewchild/doc-03-03-05-06.component';
import { Doc0303050601Component } from './06-parent-calls-an-viewchild/doc-03-03-05-06-01.component';
import { Doc03030507Component } from './07-parent-and-children-communicate-via-a-service/doc-03-03-05-07.component';
import { Doc0303050701Component } from './07-parent-and-children-communicate-via-a-service/doc-03-03-05-07-01.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    Doc030305Component,
    Doc03030501Component,
    Doc0302050101Component,
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
  imports: [SharedModule, AccordionModule, ButtonModule, Doc030305RoutingModule],
})
export class Doc030305Module {}
