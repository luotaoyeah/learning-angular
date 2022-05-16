import { Component } from '@angular/core';
import { AService } from '../a/a.service';

@Component({
    selector: 'app-b',
    template: '<p>b works!</p>',
})
export class BComponent {
    public constructor(private aService: AService) {
        this.aService.f01();
    }
}
