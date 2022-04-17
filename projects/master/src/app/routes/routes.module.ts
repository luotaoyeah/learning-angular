import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from '@app/routes/routes-routing.module';
import { DatePipeComponent } from './api/common/date-pipe/date-pipe.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [HomeComponent, DatePipeComponent],
    imports: [RoutesRoutingModule, CommonModule],
})
export class RoutesModule {}
