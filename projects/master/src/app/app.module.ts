import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { RoutesModule } from '@app/routes/routes.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, RoutesModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
