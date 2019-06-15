import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { InputTextModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    ...[PanelModule, InputTextModule],
    SharedModule,
  ],
})
export class HeroesModule {}
