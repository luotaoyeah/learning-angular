import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header-setting',
  templateUrl: './header-setting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSettingComponent {}
