import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-02-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-02-04-intro-to-services-and-di/doc-fundamental-architecture-di.component';

const routes: Routes = [
  {
    path: '03/02/intro-into-component',
    component: DocFundamentalArchitectureIntroToComponentComponent,
  },
  {
    path: '03/02/di',
    component: DocFundamentalArchitectureDiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0302RoutingModule {}
