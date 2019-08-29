import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'header-user',
  templateUrl: './header-user.component.html',
})
export class HeaderUserComponent {
  constructor(
    public settingsService: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN)
    private tokenService: ITokenService,
  ) {}

  public logout() {
    this.tokenService.clear();
    if (this.tokenService.login_url) {
      this.router.navigateByUrl(this.tokenService.login_url);
    }
  }
}
