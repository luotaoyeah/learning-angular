import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocFundamentalRoutingSampleRoutingModule } from './doc-fundamental-routing-sample-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [CrisisListComponent, HeroListComponent],
  imports: [CommonModule, DocFundamentalRoutingSampleRoutingModule, ...[PanelModule]]
})
export class DocFundamentalRoutingSampleModule {}
