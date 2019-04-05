import { Component, OnInit } from '@angular/core';
import { SelectivePreloadingStrategyService } from '../../service/selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private selectivePreloadingStrategyService: SelectivePreloadingStrategyService,
  ) {}

  ngOnInit() {
    console.log(
      `[${AdminDashboardComponent.name}] - [${
        this.selectivePreloadingStrategyService.modules[0]
      }]`,
    );
  }
}
