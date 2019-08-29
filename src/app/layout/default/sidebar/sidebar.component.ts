import { Component } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent {
  constructor(public settingsService: SettingsService) {}
}
