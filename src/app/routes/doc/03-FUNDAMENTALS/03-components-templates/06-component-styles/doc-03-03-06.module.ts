import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030306RoutingModule } from './doc-03-03-06-routing.module';
import { Doc030306Component } from './doc-03-03-06.component';
import { Doc03030601Component } from './01-using-component-styles/doc-03-03-06-01.component';
import { Doc03020602Component } from './03-02-06-02-style-scope/doc-03-02-06-02.component';
import { Doc0302060201Component } from './03-02-06-02-style-scope/doc-03-02-06-02-01.component';
import { Doc03030603Component } from './03-03-06-03-special-selectors/doc-03-03-06-03.component';
import { Doc030306030101Component } from './03-03-06-03-special-selectors/03-03-06-03-01-host/03-03-06-03-01-01/doc-03-03-06-03-01-01.component';
import { Doc0303060302Component } from './03-03-06-03-special-selectors/03-03-06-03-02-host-context/doc-03-03-06-03-02.component';
import { Doc0303060303Component } from './03-03-06-03-special-selectors/03-03-06-03-03-ng-deep/doc-03-03-06-03-03.component';
import { Doc030306030301Component } from './03-03-06-03-special-selectors/03-03-06-03-03-ng-deep/doc-03-03-06-03-03-01.component';
import { Doc030306030302Component } from './03-03-06-03-special-selectors/03-03-06-03-03-ng-deep/doc-03-03-06-03-03-02.component';
import { Doc03020604Component } from './03-02-06-04-loading-component-styles/doc-03-02-06-04.component';
import { Doc0302060401Component } from './03-02-06-04-loading-component-styles/03-02-06-04-01-styles-in-component-metadata/doc-03-02-06-04-01.component';
import { Doc0302060402Component } from './03-02-06-04-loading-component-styles/03-02-06-04-02-style-files-in-component-metadata/doc-03-02-06-04-02.component';
import { Doc0302060403Component } from './03-02-06-04-loading-component-styles/03-02-06-04-03-template-inline-styles/doc-03-02-06-04-03.component';
import { Doc0302060404Component } from './03-02-06-04-loading-component-styles/03-02-06-04-04-template-link-tags/doc-03-02-06-04-04.component';
import { Doc03030605Component } from './03-03-06-05-view-encapsulation/doc-03-03-06-05.component';
import { AccordionModule } from 'primeng/primeng';
import { Doc0303060501Component } from './03-03-06-05-view-encapsulation/doc-03-03-06-05-01/doc-03-03-06-05-01.component';
import { Doc0303060502Component } from './03-03-06-05-view-encapsulation/doc-03-03-06-05-02/doc-03-03-06-05-02.component';
import { Doc0303060503Component } from './03-03-06-05-view-encapsulation/doc-03-03-06-05-03/doc-03-03-06-05-03.component';
import { Doc03030606Component } from './03-03-06-06-inspecting-generated-css/doc-03-03-06-06.component';
import { Doc030306030102Component } from './03-03-06-03-special-selectors/03-03-06-03-01-host/03-03-06-03-01-02/doc-03-03-06-03-01-02.component';
import { Doc0303060301Component } from './03-03-06-03-special-selectors/03-03-06-03-01-host/doc-03-03-06-03-01.component';
import { Doc030306030201Component } from './03-03-06-03-special-selectors/03-03-06-03-02-host-context/03-03-06-03-02-01/doc-03-03-06-03-02-01.component';

@NgModule({
  declarations: [
    Doc030306Component,
    Doc03030601Component,
    Doc03020602Component,
    Doc0302060201Component,
    Doc03030603Component,
    Doc0303060301Component,
    Doc030306030101Component,
    Doc030306030102Component,
    Doc0303060302Component,
    Doc030306030201Component,
    Doc0303060303Component,
    Doc030306030301Component,
    Doc030306030302Component,
    Doc03020604Component,
    Doc0302060401Component,
    Doc0302060402Component,
    Doc0302060403Component,
    Doc0302060404Component,
    Doc03030605Component,
    Doc0303060501Component,
    Doc0303060502Component,
    Doc0303060503Component,
    Doc03030606Component,
  ],
  imports: [SharedModule, AccordionModule, Doc030306RoutingModule],
})
export class Doc030306Module {}
