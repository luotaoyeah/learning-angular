import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, HeroesRoutingModule, ...[PanelModule]]
})
export class HeroesModule {}
