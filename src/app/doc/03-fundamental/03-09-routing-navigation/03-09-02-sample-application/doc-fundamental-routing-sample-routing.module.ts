import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisListComponent
  },
  {
    path: 'heroes',
    component: HeroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocFundamentalRoutingSampleRoutingModule {}
