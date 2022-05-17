import { Component, Inject, Optional } from '@angular/core';
import { TOKEN_D } from './a.const';
import { BComponent } from './b.component';

@Component({
    selector: 'app-c',
    template: ` <p>c works!</p> `,
    // providers: [{ provide: TOKEN_C, useValue: 'CComponent' }],
})
export class CComponent {
    public constructor(
        @Inject(TOKEN_D)
        @Optional()
        private d: string | null,
        @Optional()
        private bComponent: BComponent | null,
    ) {
        console.log('d:', this.d);
        console.log('bComponent:', this.bComponent);
    }
}
