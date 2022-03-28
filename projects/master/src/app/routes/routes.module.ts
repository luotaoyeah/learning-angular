import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from '@app/routes/routes-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [RoutesRoutingModule, CommonModule],
})
export class RoutesModule {}
