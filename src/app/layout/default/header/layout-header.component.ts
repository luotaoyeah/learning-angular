import { Component } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './layout-header.component.html',
})
export class LayoutHeaderComponent {
  constructor(public settingsService: SettingsService) {}

  public toggleCollapsedSidebar() {
    this.settingsService.setLayout('collapsed', !this.settingsService.layout.collapsed);
  }
}
