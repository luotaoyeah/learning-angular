import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a.component';
import { TOKEN_A } from './a.const';
import { ADirective } from '../directives/a.directive';
import { BDirective } from '../directives/b.directive';
import { CDirective } from '../directives/c.directive';
import { BComponent } from './b.component';
import { CComponent } from './c.component';

@NgModule({
    declarations: [AComponent, ADirective, BDirective, CDirective, BComponent, CComponent],
    imports: [CommonModule],
    providers: [{ provide: TOKEN_A, useValue: 'AModule' }],
    exports: [AComponent],
})
export class AModule {}
