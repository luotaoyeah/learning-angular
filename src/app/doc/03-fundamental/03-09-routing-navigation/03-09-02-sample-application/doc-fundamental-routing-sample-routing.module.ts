import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { DocFundamentalRoutingSampleComponent } from './doc-fundamental-routing-sample.component';

const routes: Routes = [
  {
    path: 'doc/fundamental/routing/sample-application',
    component: DocFundamentalRoutingSampleComponent,
    children: [
      {
        path: 'crisis-center',
        component: CrisisListComponent
      },
      {
        path: 'heroes',
        component: HeroListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocFundamentalRoutingSampleRoutingModule {}
