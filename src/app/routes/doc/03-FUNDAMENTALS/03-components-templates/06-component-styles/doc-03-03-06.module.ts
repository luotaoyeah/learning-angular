import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030306RoutingModule } from './doc-03-03-06-routing.module';
import { Doc030306Component } from './doc-03-03-06.component';
import { Doc03030601Component } from './01-using-component-styles/doc-03-03-06-01.component';
import { Doc03030602Component } from './02-style-scope/doc-03-03-06-02.component';
import { Doc0303060201Component } from './02-style-scope/doc-03-03-06-02.01.component';
import { Doc03030603Component } from './03-special-selectors/doc-03-03-06-03.component';
import { Doc030306030101Component } from './03-special-selectors/01-host/01/doc-03-03-06-03-01-01.component';
import { Doc0303060302Component } from './03-special-selectors/02-host-context/doc-03-03-06-03-02.component';
import { Doc0303060303Component } from './03-special-selectors/03-ng-deep/doc-03-03-06-03-03.component';
import { Doc030306030301Component } from './03-special-selectors/03-ng-deep/01/doc-03-03-06-03-03-01.component';
import { Doc030306030302Component } from './03-special-selectors/03-ng-deep/02/doc-03-03-06-03-03-02.component';
import { Doc03030604Component } from './04-loading-component-styles/doc-03-03-06-04.component';
import { Doc0303060401Component } from './04-loading-component-styles/01-styles-in-component-metadata/doc-03-03-06-04-01.component';
import { Doc0303060402Component } from './04-loading-component-styles/02-style-files-in-component-metadata/doc-03-03-06-04-02.component';
import { Doc0303060403Component } from './04-loading-component-styles/03-template-inline-styles/doc-03-03-06-04-03.component';
import { Doc0303060404Component } from './04-loading-component-styles/04-template-link-tags/doc-03-03-06-04-04.component';
import { Doc03030605Component } from './05-view-encapsulation/doc-03-03-06-05.component';
import { Doc0303060501Component } from './05-view-encapsulation/01/doc-03-03-06-05-01.component';
import { Doc0303060502Component } from './05-view-encapsulation/02/doc-03-03-06-05-02.component';
import { Doc0303060503Component } from './05-view-encapsulation/03/doc-03-03-06-05-03.component';
import { Doc03030606Component } from './06-inspecting-generated-css/doc-03-03-06-06.component';
import { Doc030306030102Component } from './03-special-selectors/01-host/02/doc-03-03-06-03-01-02.component';
import { Doc0303060301Component } from './03-special-selectors/01-host/doc-03-03-06-03-01.component';
import { Doc030306030201Component } from './03-special-selectors/02-host-context/01/doc-03-03-06-03-02-01.component';

@NgModule({
  declarations: [
    Doc030306Component,
    Doc03030601Component,
    Doc03030602Component,
    Doc0303060201Component,
    Doc03030603Component,
    Doc0303060301Component,
    Doc030306030101Component,
    Doc030306030102Component,
    Doc0303060302Component,
    Doc030306030201Component,
    Doc0303060303Component,
    Doc030306030301Component,
    Doc030306030302Component,
    Doc03030604Component,
    Doc0303060401Component,
    Doc0303060402Component,
    Doc0303060403Component,
    Doc0303060404Component,
    Doc03030605Component,
    Doc0303060501Component,
    Doc0303060502Component,
    Doc0303060503Component,
    Doc03030606Component,
  ],
  imports: [SharedModule, Doc030306RoutingModule],
})
export class Doc030306Module {}
