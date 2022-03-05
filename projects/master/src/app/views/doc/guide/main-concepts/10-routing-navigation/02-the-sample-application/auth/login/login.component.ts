import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/auth/services/auth.service';

@Component({
  selector: 'app--login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public authService: AuthService) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queryMap: ParamMap) => {
      console.log(`[${LoginComponent.name}]\n`, `[session_id] ${queryMap.get('session_id')}`);
    });

    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      console.log(`[${LoginComponent.name}]\n`, `[fragment] ${fragment}`);
    });
  }

  public login(): void {
    /*
     * queryParamsHandling 用来配置如何处理 query params,
     * preserveFragment 用来配置是否保留 fragment
     */
    this.authService.login().subscribe(() => {
      if (this.authService.isLogin) {
        this.router.navigateByUrl(
          this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/doc/03/10/02/admin',
          /* Removed unsupported properties by Angular migration: queryParamsHandling, preserveFragment. */ {},
        );
      }
    });
  }

  public logout(): void {
    this.authService.logout();
  }
}
