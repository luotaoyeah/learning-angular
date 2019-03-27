import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { DocFundamentalComponentTemplateDisplayingDataComponent } from './03-02-01-displaying-data/doc-fundamental-component-template-displaying-data.component';

const routes: Routes = [
  {
    path: 'doc/fundamental/component-template/displaying-data',
    component: DocFundamentalComponentTemplateDisplayingDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocFundamentalComponentTemplateRoutingModule {}
