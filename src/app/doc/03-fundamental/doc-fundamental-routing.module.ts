import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocFundamentalComponent } from './doc-fundamental.component';
import { RoutingNavigationComponent } from './03-09-routing-navigation/routing-navigation.component';
import { DocFundamentalArchitectureComponent } from './03-01-architecture/doc-fundamental-architecture.component';
import { DocFundamentalArchitectureIntroToComponentComponent } from './03-01-architecture/03-01-03-intro-to-component/doc-fundamental-architecture-intro-to-component.component';
import { DocFundamentalArchitectureDiComponent } from './03-01-architecture/03-01-04-di/doc-fundamental-architecture-di.component';

const routes: Routes = [
  {
    path: 'doc/fundamental',
    component: DocFundamentalComponent,
    children: [
      {
        path: 'architecture',
        component: DocFundamentalArchitectureComponent,
        children: [
          {
            path: 'intro-into-component',
            component: DocFundamentalArchitectureIntroToComponentComponent
          },
          {
            path: 'di',
            component: DocFundamentalArchitectureDiComponent
          }
        ]
      },
      {
        path: 'routing-navigation',
        component: RoutingNavigationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocFundamentalRoutingModule {}
