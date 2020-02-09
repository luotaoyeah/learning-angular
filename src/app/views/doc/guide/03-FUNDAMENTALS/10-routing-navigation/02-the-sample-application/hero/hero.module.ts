import { NgModule } from '@angular/core';
import { HeroRoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/hero/hero-routing.module';
import { HeroDetailComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/hero/hero-detail/hero-detail.component';
import { HeroListComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/hero/hero-list/hero-list.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [SharedModule, HeroRoutingModule],
})
export class HeroModule {}
