import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateDisplayingDataComponent } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data.component';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateTemplateSyntaxComponent } from './03-02-02-template-syntax/doc-fundamental-component-template-template-syntax.component';

const routes: Routes = [
  {
    path: 'doc/fundamental/component-template/displaying-data',
    component: DocFundamentalComponentTemplateDisplayingDataComponent
  },
  {
    path: 'doc/fundamental/component-template/template-syntax',
    component: DocFundamentalComponentTemplateTemplateSyntaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocFundamentalComponentTemplateRoutingModule {}
