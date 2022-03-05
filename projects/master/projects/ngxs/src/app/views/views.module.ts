import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from './home/home.component';
import { ImmutabilityHelpersComponent } from './recipes/immutability-helpers/immutability-helpers.component';
import { ViewsRoutingModule } from './views-routing.module';

@NgModule({
  imports: [SharedModule, ViewsRoutingModule],
  declarations: [HomeComponent, ImmutabilityHelpersComponent],
})
export class ViewsModule {}
