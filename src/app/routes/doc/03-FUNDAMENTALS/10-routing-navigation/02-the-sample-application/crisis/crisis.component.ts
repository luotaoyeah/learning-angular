import { Component } from '@angular/core';
import { ReuseTabService } from '@delon/abc';

@Component({
  selector: 'app-crisis',
  templateUrl: './crisis.component.html',
})
export class CrisisComponent {
  constructor(reuseTabService: ReuseTabService) {
    reuseTabService.title = 'CRISIS CENTER';
  }
}
