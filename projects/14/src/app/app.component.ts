import { Component, Inject } from '@angular/core';
import { TOKEN_A, TOKEN_B, TOKEN_C, TOKEN_E } from './element-injector-hierarchy/a.const';
import { LoggerService } from './services/logger.service';
import { LoggerAService } from './services/logger-a.service';
import { ILoggerService } from './services/i-logger.service';

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
        {
            provide: TOKEN_E,
            useFactory: (a: string, c: string) => {
                console.log('TOKEN_E: a:', a);
                console.log('TOKEN_E: c:', c);
                return 'AppComponent';
            },
            deps: [TOKEN_A, TOKEN_C],
        },
        { provide: LoggerService, useClass: LoggerAService },
    ],
})
export class AppComponent {
    public constructor(
        @Inject(LoggerService)
        private loggerService: ILoggerService,
        @Inject(TOKEN_E)
        private e: string,
    ) {
        this.loggerService.log('AppComponent');
        console.log('e:', e);
    }
}
