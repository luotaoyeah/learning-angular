import { Component } from '@angular/core';
import { RedDirective } from '../../shared/red.directive';
import { CompaComponent } from '../compa/compa.component';

@Component({
    selector: 'app-foo',
    standalone: true,
    hostDirectives: [RedDirective],
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.css'],
    imports: [CompaComponent],
})
export class FooComponent {
    public onLtInit() {
        alert('ltInit');
    }
}
