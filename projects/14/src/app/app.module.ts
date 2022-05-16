import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { AModule } from './element-injector-hierarchy/a.module';
import { TOKEN_A, TOKEN_B, TOKEN_C } from './element-injector-hierarchy/a.const';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CompAComponent, AModule],
    providers: [
        { provide: TOKEN_A, useValue: 'AppModule' },
        { provide: TOKEN_B, useValue: 'AppModule' },
        { provide: TOKEN_C, useValue: 'AppModule' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
