import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { RoutesRoutingModule } from './routes-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [SharedModule, RoutesRoutingModule],
  declarations: [HomeComponent],
})
export class RoutesModule {}
