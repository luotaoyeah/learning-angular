import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HomeComponent } from '@app/views/home/home.component';
import { ViewsRoutingModule } from '@app/views/views-routing.module';

@NgModule({
  imports: [SharedModule, ViewsRoutingModule],
  declarations: [HomeComponent],
})
export class ViewsModule {}
