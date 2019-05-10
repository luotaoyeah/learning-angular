import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public searchToggleStatus = false;

  constructor(public settings: SettingsService) {}

  public toggleCollapsedSidebar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
  }

  public searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
