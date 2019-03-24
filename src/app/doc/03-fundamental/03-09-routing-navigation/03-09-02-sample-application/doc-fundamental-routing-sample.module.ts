import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { DocFundamentalRoutingSampleComponent } from './doc-fundamental-routing-sample.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DocFundamentalRoutingSampleComponent],
  imports: [CommonModule, RouterModule, ...[PanelModule], HeroesModule, CrisisCenterModule]
})
export class DocFundamentalRoutingSampleModule {}
