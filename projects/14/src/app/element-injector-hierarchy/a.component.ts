import { Component, Inject, OnInit, Optional } from '@angular/core';
import { TOKEN_A } from './a.const';

/**
 * https://www.youtube.com/watch?v=G8zXugcYd7o&list=PLX7eV3JL9sfmJ6AaZj9eDlAKrJrEul4Vz
 *
 * element injector hierarchy
 * module injector hierarchy
 */
@Component({
    selector: 'app-a',
    templateUrl: './a.component.html',
    providers: [{ provide: TOKEN_A, useValue: 'AComponent' }],
})
export class AComponent implements OnInit {
    public constructor(
        @Inject(TOKEN_A)
        @Optional()
        private a?: string,
    ) {}

    public ngOnInit(): void {
        console.log('a:', this.a);
    }
}
