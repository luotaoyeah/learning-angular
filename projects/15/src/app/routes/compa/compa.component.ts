import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from '../../shared/color.directive';

@Component({
    selector: 'app-compa',
    standalone: true,
    imports: [CommonModule],
    hostDirectives: [
        {
            directive: ColorDirective,
            inputs: ['ltColor'],
            outputs: ['ltInit'],
        },
    ],
    templateUrl: './compa.component.html',
    styleUrls: ['./compa.component.css'],
})
export class CompaComponent {}
