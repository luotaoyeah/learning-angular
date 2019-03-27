import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocFundamentalComponentTemplateRoutingModule } from './doc-fundamental-component-template-routing.module';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateDisplayingDataComponent } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/primeng';

@NgModule({
  declarations: [DocFundamentalComponentTemplateDisplayingDataComponent],
  imports: [CommonModule, DocFundamentalComponentTemplateRoutingModule, PanelModule, AccordionModule]
})
export class DocFundamentalComponentTemplateModule {}
