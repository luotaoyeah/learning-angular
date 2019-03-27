// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0302RoutingModule } from './doc-03-02-routing.module';
import { Doc030201Component } from './03-02-01-displaying-data/doc-03-02-01.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/primeng';
import { DocFundamentalComponentTemplateDisplayingData01Component } from './03-02-01-displaying-data/03-02-01-01/doc-fundamental-component-template-displaying-data-01.component';
import { DocFundamentalComponentTemplateDisplayingData02Component } from './03-02-01-displaying-data/03-02-01-02/doc-fundamental-component-template-displaying-data-02.component';
import { DocFundamentalComponentTemplateDisplayingData03Component } from './03-02-01-displaying-data/03-02-01-03/doc-fundamental-component-template-displaying-data-03.component';
import { DocFundamentalComponentTemplateDisplayingData04Component } from './03-02-01-displaying-data/03-02-01-04/doc-fundamental-component-template-displaying-data-04.component';
import { DocFundamentalComponentTemplateDisplayingData05Component } from './03-02-01-displaying-data/03-02-01-05/doc-fundamental-component-template-displaying-data-05.component';
import { Doc030202Component } from './03-02-02-template-syntax/doc-03-02-02.component';
import { Doc03020201Component } from './03-02-02-template-syntax/03-02-02-01-html-in-template/doc-03-02-02-01.component';
import { Doc03020202Component } from './03-02-02-template-syntax/03-02-02-02-interpolation-and-template-expression/doc-03-02-02-02.component';
import { Doc0302020201Component } from './03-02-02-template-syntax/03-02-02-02-interpolation-and-template-expression/03-02-02-02-01-interpolation/doc-03-02-02-02-01.component';

// tslint:enable:max-line-length

@NgModule({
  declarations: [
    Doc030201Component,
    DocFundamentalComponentTemplateDisplayingData01Component,
    DocFundamentalComponentTemplateDisplayingData02Component,
    DocFundamentalComponentTemplateDisplayingData03Component,
    DocFundamentalComponentTemplateDisplayingData04Component,
    DocFundamentalComponentTemplateDisplayingData05Component,
    Doc030202Component,
    Doc03020201Component,
    Doc03020202Component,
    Doc0302020201Component
  ],
  imports: [CommonModule, Doc0302RoutingModule, PanelModule, AccordionModule]
})
export class Doc0302Module {}
