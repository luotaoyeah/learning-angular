import { registerLocaleData } from '@angular/common';
import { default as en } from '@angular/common/locales/en';
import { default as zh } from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { RoutesModule } from '@app/routes/routes.module';
import { AppComponent } from './app.component';

registerLocaleData(zh, 'zh');
registerLocaleData(en, 'en');

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, RoutesModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
