import { _HttpClient } from '@delon/theme';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { StartupService } from '@core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ReuseTabService } from '@delon/abc';

@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  public formGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    modalService: NzModalService,
    public httpClient: _HttpClient,
    private translateService: TranslateService,
    private notificationService: NzNotificationService,
    private router: Router,
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private startupService: StartupService,
  ) {
    this.formGroup = formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    modalService.closeAll();
  }

  get userName() {
    return this.formGroup.controls.userName;
  }

  get password() {
    return this.formGroup.controls.password;
  }

  /**
   * 登录
   */
  public login() {
    this.userName.markAsDirty();
    this.userName.updateValueAndValidity();
    this.password.markAsDirty();
    this.password.updateValueAndValidity();
    if (this.userName.invalid || this.password.invalid) {
      return;
    }
    // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
    // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
    this.httpClient
      .post('/login/account?_allow_anonymous=true', {
        userName: this.userName.value,
        password: this.password.value,
      })
      // tslint:disable-next-line:no-any
      .subscribe((res: any) => {
        if (res.msg !== 'ok') {
          this.translateService
            .get('app.login.login-failed')
            .subscribe((title: string) => {
              this.notificationService.error(title, res.msg);
            });

          return;
        }

        // 清空路由复用信息
        this.reuseTabService.clear();
        // 设置用户Token信息
        this.tokenService.set(res.user);
        // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
        this.startupService.load().then(() => {
          let url =
            (this.tokenService.referrer && this.tokenService.referrer.url) ||
            '/';
          if (url.includes('/passport')) {
            url = '/';
          }
          this.router.navigateByUrl(url);
        });
      });
  }
}
