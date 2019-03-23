import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocFundamentalRoutingSampleRoutingModule } from './doc-fundamental-routing-sample-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PanelModule } from 'primeng/panel';
import { DocFundamentalRoutingSampleComponent } from './doc-fundamental-routing-sample.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [CrisisListComponent, DocFundamentalRoutingSampleComponent],
  imports: [CommonModule, DocFundamentalRoutingSampleRoutingModule, ...[PanelModule], HeroesModule]
})
export class DocFundamentalRoutingSampleModule {}
