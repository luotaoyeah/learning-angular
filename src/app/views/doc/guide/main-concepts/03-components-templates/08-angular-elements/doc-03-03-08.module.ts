import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030308RoutingModule } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/doc-03-03-08-routing.module';
import { Doc030308Component } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/doc-03-03-08.component';
import { Doc03030801Component } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/01-angular-elements-overview/doc-03-03-08-01.component';
import { Doc03030804Component } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/04-example-a-popup-service/doc-03-03-08-04.component';
import { Doc0303080401Component } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/04-example-a-popup-service/01/doc-03-03-08-04.01.component';
import { Doc0303080401Service } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/04-example-a-popup-service/01/doc-03-03-08-04.01.service';
import { Doc03030805Component } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/05-typings-for-custom-elements/doc-03-03-08-05.component';

@NgModule({
  declarations: [
    Doc030308Component,
    Doc03030801Component,
    Doc03030804Component,
    Doc0303080401Component,
    Doc03030805Component,
  ],
  providers: [Doc0303080401Service],
  imports: [SharedModule, Doc030308RoutingModule],
  entryComponents: [Doc0303080401Component],
})
export class Doc030308Module {}
