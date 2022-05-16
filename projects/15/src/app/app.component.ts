import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AModule } from './shared/modules/a/a.module';
import { BModule } from './shared/modules/b/b.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, AModule, BModule],
})
export class AppComponent {}
