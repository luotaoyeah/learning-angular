import { Directive, Inject, Optional } from '@angular/core';
import { TOKEN_C } from '../element-injector-hierarchy/a.const';

@Directive({
    selector: '[appC]',
    // providers: [{ provide: TOKEN_C, useValue: 'CDirective' }],
})
export class CDirective {
    public constructor(
        @Inject(TOKEN_C)
        @Optional()
        public c: string | null,
    ) {
        console.log('c:', this.c);
    }
}
