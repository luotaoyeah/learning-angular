import { NgModule } from '@angular/core';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [SharedModule, HeroRoutingModule],
})
export class HeroModule {}
