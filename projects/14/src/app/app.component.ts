import { Component } from '@angular/core';
import { TOKEN_A, TOKEN_B, TOKEN_C } from './element-injector-hierarchy/a.const';
import { LoggerService } from './services/logger.service';
import { LoggerAService } from './services/logger-a.service';

@Component({
    selector: 'app-root',
    template: `
        <app-comp-a></app-comp-a>
        <app-a></app-a>
    `,
    providers: [
        { provide: TOKEN_A, useValue: 'AppComponent' },
        { provide: TOKEN_B, useValue: 'AppComponent' },
        { provide: TOKEN_C, useValue: 'AppComponent' },
        { provide: LoggerService, useClass: LoggerAService },
    ],
})
export class AppComponent {
    public constructor(private loggerService: LoggerService) {
        this.loggerService.log('AppComponent');
    }
}
