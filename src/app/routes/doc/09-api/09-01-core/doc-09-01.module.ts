import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc0901RoutingModule } from './doc-09-01-routing.module';
import { Doc090102Component } from './09-01-02-primary-entry-point-exports/doc-09-01-02.component';
import { Doc090101Component } from './09-01-01-entry-points/doc-09-01-01.component';
import { Doc09010203Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/doc-09-01-02-03.component';
import { Doc090102030301Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-03/09-01-02-03-03-01/doc-09-01-02-03-03-01.component';
import { Doc090102030302Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-03/09-01-02-03-03-02/doc-09-01-02-03-03-02.component';
import { Doc090102030303Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-03/09-01-02-03-03-03/doc-09-01-02-03-03-03.component';
import { Doc090102030304Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-03/09-01-02-03-03-04/doc-09-01-02-03-03-04.component';
import { Doc090102030304Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-03/09-01-02-03-03-04/doc-09-01-02-03-03-04.directive';
import { Doc0901020303Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-03/doc-09-01-02-03-03.component';
import { Doc0901020305Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/doc-09-01-02-03-05.component';
import { Doc090102030501Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-01/doc-09-01-02-03-05-01.component';
import { Doc09010203050101Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-01/directive/doc-09-01-02-03-05-01-01.directive';
import { Doc09010203050102Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-01/directive/doc-09-01-02-03-05-01-02.directive';
import { Doc09010203050103Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-01/directive/doc-09-01-02-03-05-01-03.directive';
import { Doc09010203050104Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-01/directive/doc-09-01-02-03-05-01-04.directive';
import { Doc090102030502Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-02/doc-09-01-02-03-05-02.component';
import { Doc090102030502Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-02/directive/doc-09-01-02-03-05-02.directive';
import { Doc090102030503Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-03/doc-09-01-02-03-05-03.component';
import { Doc09010203050301Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-03/directive/doc-09-01-02-03-05-03-01.directive';
import { Doc09010203050302Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-03/directive/doc-09-01-02-03-05-03-02.directive';
import { Doc090102030504Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-04/doc-09-01-02-03-05-04.component';
import { Doc09010203050401Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-04/directive/doc-09-01-02-03-05-04-01.directive';
import { Doc090102030505Component } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-05/doc-09-01-02-03-05-05.component';
import { Doc09010203050501Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-05/directive/doc-09-01-02-03-05-05-01.directive';
import { Doc09010203050502Directive } from './09-01-02-primary-entry-point-exports/09-01-02-03-decorators/09-01-02-03-05/09-01-02-03-05-05/directive/doc-09-01-02-03-05-05-02.directive';

@NgModule({
  declarations: [
    Doc090101Component,
    Doc090102Component,
    Doc09010203Component,
    Doc0901020303Component,
    Doc090102030301Component,
    Doc090102030302Component,
    Doc090102030303Component,
    Doc090102030304Component,
    Doc0901020305Component,
    Doc090102030501Component,
    Doc090102030502Component,
    Doc090102030503Component,
    Doc090102030504Component,
    Doc090102030505Component,
    [
      Doc090102030304Directive,
      Doc09010203050101Directive,
      Doc09010203050102Directive,
      Doc09010203050103Directive,
      Doc09010203050104Directive,
      Doc090102030502Directive,
      Doc09010203050301Directive,
      Doc09010203050302Directive,
      Doc09010203050401Directive,
      Doc09010203050501Directive,
      Doc09010203050502Directive,
    ],
  ],
  imports: [CommonModule, FormsModule, SharedModule, Doc0901RoutingModule],
})
export class Doc0901Module {}
