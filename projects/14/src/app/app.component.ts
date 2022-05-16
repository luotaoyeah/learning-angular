import { Component } from '@angular/core';
import { TOKEN_A, TOKEN_B, TOKEN_C } from './element-injector-hierarchy/a.const';

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
    ],
})
export class AppComponent {}
