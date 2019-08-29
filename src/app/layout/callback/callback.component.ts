import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialService } from '@delon/auth';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'app-callback',
  template: ``,
  providers: [SocialService],
})
export class CallbackComponent implements OnInit {
  public type = '';

  constructor(
    private socialService: SocialService,
    private settingsService: SettingsService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.params.type;
    this.mockModel();
  }

  private mockModel() {
    const info = {
      token: '123456789',
      name: 'cipchk',
      email: `${this.type}@${this.type}.com`,
      id: 10000,
      time: +new Date(),
    };
    this.settingsService.setUser({
      ...this.settingsService.user,
      ...info,
    });
    this.socialService.callback(info);
  }
}
