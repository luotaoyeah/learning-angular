import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocFundamentalRoutingSampleRoutingModule } from './doc-fundamental-routing-sample-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PanelModule } from 'primeng/panel';
import { DocFundamentalRoutingSampleComponent } from './doc-fundamental-routing-sample.component';

@NgModule({
  declarations: [CrisisListComponent, HeroListComponent, DocFundamentalRoutingSampleComponent],
  imports: [CommonModule, DocFundamentalRoutingSampleRoutingModule, ...[PanelModule]]
})
export class DocFundamentalRoutingSampleModule {}
