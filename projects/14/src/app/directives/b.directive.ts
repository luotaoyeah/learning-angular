import { Directive, Inject, Optional } from '@angular/core';
import { TOKEN_C } from '../element-injector-hierarchy/a.const';

@Directive({
    selector: '[appB]',
    // providers: [{ provide: TOKEN_C, useValue: 'BDirective' }],
})
export class BDirective {
    public constructor() {}
}
