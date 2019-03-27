// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocFundamentalComponentTemplateRoutingModule } from './doc-fundamental-component-template-routing.module';
import { DocFundamentalComponentTemplateDisplayingDataComponent } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/primeng';
import { DocFundamentalComponentTemplateDisplayingData01Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-01/doc-fundamental-component-template-displaying-data-01.component';
import { DocFundamentalComponentTemplateDisplayingData02Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-02/doc-fundamental-component-template-displaying-data-02.component';
import { DocFundamentalComponentTemplateDisplayingData03Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-03/doc-fundamental-component-template-displaying-data-03.component';
import { DocFundamentalComponentTemplateDisplayingData04Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-04/doc-fundamental-component-template-displaying-data-04.component';
import { DocFundamentalComponentTemplateDisplayingData05Component } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data-05/doc-fundamental-component-template-displaying-data-05.component';
import { DocFundamentalComponentTemplateTemplateSyntaxComponent } from './03-02-02-template-syntax/doc-fundamental-component-template-template-syntax.component';
import { DocFundamentalComponentTemplateTemplateSyntax01Component } from './03-02-02-template-syntax/doc-fundamental-component-template-template-syntax-01/doc-fundamental-component-template-template-syntax-01.component';

// tslint:enable:max-line-length

@NgModule({
  declarations: [
    DocFundamentalComponentTemplateDisplayingDataComponent,
    DocFundamentalComponentTemplateDisplayingData01Component,
    DocFundamentalComponentTemplateDisplayingData02Component,
    DocFundamentalComponentTemplateDisplayingData03Component,
    DocFundamentalComponentTemplateDisplayingData04Component,
    DocFundamentalComponentTemplateDisplayingData05Component,
    DocFundamentalComponentTemplateTemplateSyntaxComponent,
    DocFundamentalComponentTemplateTemplateSyntax01Component
  ],
  imports: [CommonModule, DocFundamentalComponentTemplateRoutingModule, PanelModule, AccordionModule]
})
export class DocFundamentalComponentTemplateModule {}
