import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocFundamentalComponentTemplateRoutingModule } from './doc-fundamental-component-template-routing.module';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateDisplayingDataComponent } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/primeng';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateDisplayingData01Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-01/doc-fundamental-component-template-displaying-data-01.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateDisplayingData02Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-02/doc-fundamental-component-template-displaying-data-02.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateDisplayingData03Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-03/doc-fundamental-component-template-displaying-data-03.component';

@NgModule({
  declarations: [
    DocFundamentalComponentTemplateDisplayingDataComponent,
    DocFundamentalComponentTemplateDisplayingData01Component,
    DocFundamentalComponentTemplateDisplayingData02Component,
    DocFundamentalComponentTemplateDisplayingData03Component
  ],
  imports: [CommonModule, DocFundamentalComponentTemplateRoutingModule, PanelModule, AccordionModule]
})
export class DocFundamentalComponentTemplateModule {}
