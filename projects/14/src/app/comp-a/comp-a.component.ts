import { Component, OnInit } from '@angular/core';
import { CompBComponent } from '../comp-b/comp-b.component';

@Component({
    selector: 'app-comp-a',
    templateUrl: './comp-a.component.html',
    standalone: true,
    imports: [CompBComponent],
})
export class CompAComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
