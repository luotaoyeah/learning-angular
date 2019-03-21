import { NgModule } from '@angular/core';
import { DocFundamentalModule } from './03-fundamental/doc-fundamental.module';
import { DocTutorialModule } from './02-tutorial/doc-tutorial.module';

@NgModule({
  imports: [DocTutorialModule, DocFundamentalModule],
  exports: [DocTutorialModule, DocFundamentalModule]
})
export class DocModule {}
