import { Component } from '@angular/core';
import { TOKEN_A, TOKEN_B } from './element-injector-hierarchy/a.const';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [
        { provide: TOKEN_A, useValue: 'AppComponent' },
        { provide: TOKEN_B, useValue: 'AppComponent' },
    ],
})
export class AppComponent {}
