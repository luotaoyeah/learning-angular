import { Component, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
import { TOKEN_A, TOKEN_B } from './a.const';

/**
 * https://www.youtube.com/watch?v=G8zXugcYd7o&list=PLX7eV3JL9sfmJ6AaZj9eDlAKrJrEul4Vz
 *
 * element injector hierarchy
 * module injector hierarchy
 */
@Component({
    selector: 'app-a',
    templateUrl: './a.component.html',
    providers: [
        { provide: TOKEN_A, useValue: 'AComponent' },
        { provide: TOKEN_B, useValue: 'AComponent' },
    ],
})
export class AComponent implements OnInit {
    public constructor(
        @Inject(TOKEN_A)
        @Optional()
        private a: string | null,
        @Inject(TOKEN_B)
        @SkipSelf()
        private b: string | null,
    ) {}

    public ngOnInit(): void {
        console.log('a:', this.a);
        console.log('b:', this.b);
    }
}
