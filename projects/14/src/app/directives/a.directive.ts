import { Directive } from '@angular/core';
import { TOKEN_C, TOKEN_D } from '../element-injector-hierarchy/a.const';

@Directive({
    selector: '[appA]',
    providers: [
        { provide: TOKEN_C, useValue: 'ADirective' },
        { provide: TOKEN_D, useValue: 'ADirective' },
    ],
})
export class ADirective {
    public constructor() {}
}
