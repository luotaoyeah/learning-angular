import { Component, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
import { TOKEN_A, TOKEN_B, TOKEN_C } from './a.const';

/**
 * https://www.youtube.com/watch?v=G8zXugcYd7o&list=PLX7eV3JL9sfmJ6AaZj9eDlAKrJrEul4Vz
 *
 * element injector hierarchy
 * module injector hierarchy
 */
@Component({
    selector: 'app-a',
    template: `
        <fieldset>
            <legend>app-a</legend>

            <p>directive 和 component 用的是同一个 element injector hierarchy.</p>

            <fieldset>
                <legend>element injector hierarchy:</legend>

                <pre>
        app-root
            app-a
                app-b
                    appA | appB, 取决于 appA 和 appB 在 declarations 中的顺序
                        app-c
                            appC
        </pre>
            </fieldset>

            <app-b appB appA>
                <app-c appC></app-c>
            </app-b>
        </fieldset>
    `,
    providers: [
        { provide: TOKEN_A, useValue: 'AComponent' },
        { provide: TOKEN_B, useValue: 'AComponent' },
        { provide: TOKEN_C, useValue: 'AComponent' },
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
