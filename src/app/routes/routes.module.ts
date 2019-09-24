import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { RoutesRoutingModule } from './routes-routing.module';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, MatSliderModule],
  declarations: [HomeComponent],
})
export class RoutesModule {}
