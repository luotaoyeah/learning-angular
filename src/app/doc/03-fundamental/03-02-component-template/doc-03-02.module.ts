// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0302RoutingModule } from './doc-03-02-routing.module';
import { Doc030201Component } from './03-02-01-displaying-data/doc-03-02-01.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule, ButtonModule } from 'primeng/primeng';
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

// tslint:enable:max-line-length

@NgModule({
  declarations: [
    Doc030201Component,
    Doc03020101Component,
    Doc03020102Component,
    Doc03020103Component,
    Doc03020104Component,
    Doc03020105Component,
    Doc030202Component,
    Doc03020201Component,
    Doc03020202Component,
    Doc0302020201Component,
    Doc0302020202Component,
    Doc0302020203Component,
    Doc0302020204Component,
    Doc03020203Component,
    Doc0302020301Component,
    Doc03020204Component,
    Doc03020205Component
  ],
  imports: [CommonModule, Doc0302RoutingModule, PanelModule, AccordionModule, ButtonModule, ToastModule]
})
export class Doc0302Module {}
