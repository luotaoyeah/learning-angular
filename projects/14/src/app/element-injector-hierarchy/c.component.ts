import { Component, Inject, Optional } from '@angular/core';
import { TOKEN_D } from './a.const';

@Component({
    selector: 'app-c',
    templateUrl: './c.component.html',
    // providers: [{ provide: TOKEN_C, useValue: 'CComponent' }],
})
export class CComponent {
    public constructor(
        @Inject(TOKEN_D)
        @Optional()
        private d: string | null,
    ) {
        console.log('d:', this.d);
    }
}
