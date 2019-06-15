import { NgModule } from '@angular/core';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [SharedModule, HeroesRoutingModule],
})
export class HeroesModule {}
