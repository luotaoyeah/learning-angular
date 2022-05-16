import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a.component';
import { TOKEN_A } from './a.const';

@NgModule({
    declarations: [AComponent],
    imports: [CommonModule],
    providers: [{ provide: TOKEN_A, useValue: 'AModule' }],
    exports: [AComponent],
})
export class AModule {}
