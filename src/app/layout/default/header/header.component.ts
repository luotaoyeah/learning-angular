import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public searchToggleStatus = false;

  constructor(public settingsService: SettingsService) {}

  public toggleCollapsedSidebar() {
    this.settingsService.setLayout(
      'collapsed',
      !this.settingsService.layout.collapsed,
    );
  }

  public searchToggleChange() {
    this.searchToggleStatus = !this.searchToggleStatus;
  }
}
