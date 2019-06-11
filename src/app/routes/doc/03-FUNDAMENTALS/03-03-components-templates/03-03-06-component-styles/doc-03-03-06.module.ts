import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030306RoutingModule } from './doc-03-03-06-routing.module';
import { Doc030306Component } from './doc-03-03-06.component';
import { Doc03020601Component } from './03-02-06-01-using-component-styles/doc-03-02-06-01.component';
import { Doc03020602Component } from './03-02-06-02-style-scope/doc-03-02-06-02.component';
import { Doc0302060201Component } from './03-02-06-02-style-scope/doc-03-02-06-02-01.component';
import { Doc03020603Component } from './03-02-06-03-special-selectors/doc-03-02-06-03.component';
import { Doc0302060301Component } from './03-02-06-03-special-selectors/03-02-06-03-01-host/doc-03-02-06-03-01.component';
import { Doc0302060302Component } from './03-02-06-03-special-selectors/03-02-06-03-02-host-context/doc-03-02-06-03-02.component';
import { Doc0302060303Component } from './03-02-06-03-special-selectors/03-02-06-03-03-ng-deep/doc-03-02-06-03-03.component';
import { Doc030206030301Component } from './03-02-06-03-special-selectors/03-02-06-03-03-ng-deep/doc-03-02-06-03-03-01.component';
import { Doc030206030302Component } from './03-02-06-03-special-selectors/03-02-06-03-03-ng-deep/doc-03-02-06-03-03-02.component';
import { Doc03020604Component } from './03-02-06-04-loading-component-styles/doc-03-02-06-04.component';
import { Doc0302060401Component } from './03-02-06-04-loading-component-styles/03-02-06-04-01-styles-in-component-metadata/doc-03-02-06-04-01.component';
import { Doc0302060402Component } from './03-02-06-04-loading-component-styles/03-02-06-04-02-style-files-in-component-metadata/doc-03-02-06-04-02.component';
import { Doc0302060403Component } from './03-02-06-04-loading-component-styles/03-02-06-04-03-template-inline-styles/doc-03-02-06-04-03.component';
import { Doc0302060404Component } from './03-02-06-04-loading-component-styles/03-02-06-04-04-template-link-tags/doc-03-02-06-04-04.component';
import { Doc03030605Component } from './03-03-06-05-view-encapsulation/doc-03-03-06-05.component';
import { AccordionModule } from 'primeng/primeng';
import { Doc0303060501Component } from './03-03-06-05-view-encapsulation/doc-03-03-06-05-01/doc-03-03-06-05-01.component';

@NgModule({
  declarations: [
    Doc030306Component,
    Doc03020601Component,
    Doc03020602Component,
    Doc0302060201Component,
    Doc03020603Component,
    Doc0302060301Component,
    Doc0302060302Component,
    Doc0302060303Component,
    Doc030206030301Component,
    Doc030206030302Component,
    Doc03020604Component,
    Doc0302060401Component,
    Doc0302060402Component,
    Doc0302060403Component,
    Doc0302060404Component,
    Doc03030605Component,
    Doc0303060501Component,
  ],
  imports: [SharedModule, AccordionModule, Doc030306RoutingModule],
})
export class Doc030306Module {}
