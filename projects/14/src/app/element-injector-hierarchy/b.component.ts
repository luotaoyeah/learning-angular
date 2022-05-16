import { Component } from '@angular/core';
import { TOKEN_C } from './a.const';

@Component({
    selector: 'app-b',
    templateUrl: './b.component.html',
    providers: [{ provide: TOKEN_C, useValue: 'BComponent' }],
})
export class BComponent {
    public constructor() {}
}
