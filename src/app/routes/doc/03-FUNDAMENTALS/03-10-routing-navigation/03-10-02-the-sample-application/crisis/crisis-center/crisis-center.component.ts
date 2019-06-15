import { Component } from '@angular/core';
import { ReuseTabService } from '@delon/abc';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
})
export class CrisisCenterComponent {
  constructor(reuseTabService: ReuseTabService) {
    reuseTabService.title = 'CRISIS CENTER';
  }
}
