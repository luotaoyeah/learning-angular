import { _HttpClient } from '@delon/theme';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { StartupService } from '@app/core';
import { Router } from '@angular/router';
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
    private router: Router,
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private startupService: StartupService,
  ) {
    this.formGroup = formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    modalService.closeAll();
  }

  get username() {
    return this.formGroup.controls.username;
  }

  get password() {
    return this.formGroup.controls.password;
  }

  /**
   * 登录
   */
  public login() {
    this.username.markAsDirty();
    this.username.updateValueAndValidity();
    this.password.markAsDirty();
    this.password.updateValueAndValidity();
    if (this.username.invalid || this.password.invalid) {
      return;
    }
    // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
    // 然一般来说登录请求不需要校验，因此可以在请求URL加上：`/login?_allow_anonymous=true` 表示不触发用户 Token 校验
    this.httpClient
      .post('api/login/account?_allow_anonymous=true', {
        username: this.username.value,
        password: this.password.value,
      })
      // tslint:disable-next-line:no-any
      .subscribe((res: any) => {
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
