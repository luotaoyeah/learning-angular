import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { ViewsRoutingModule } from '@app/views/views-routing.module';
import { HomeComponent } from '@app/views/home/home.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [SharedModule, ViewsRoutingModule, MatSliderModule],
  declarations: [HomeComponent],
})
export class ViewsModule {}
