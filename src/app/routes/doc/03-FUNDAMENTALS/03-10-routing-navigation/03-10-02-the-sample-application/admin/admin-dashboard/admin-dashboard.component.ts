import { Component, OnInit } from '@angular/core';
import { SelectivePreloadingStrategyService } from '../../services/selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private selectivePreloadingStrategyService: SelectivePreloadingStrategyService,
  ) {}

  public ngOnInit() {
    console.log(
      `[${AdminDashboardComponent.name}] - [${this.selectivePreloadingStrategyService.modules[0]}]`,
    );
  }
}
