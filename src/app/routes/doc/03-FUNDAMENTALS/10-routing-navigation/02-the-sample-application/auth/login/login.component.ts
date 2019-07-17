import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public authService: AuthService) {}

  public ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((queryMap: ParamMap) => {
      console.log(`[${LoginComponent.name}]\n`, `[session_id] ${queryMap.get('session_id')}`);
    });

    this.activatedRoute.fragment.subscribe((fragment: string) => {
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
          {
            queryParamsHandling: 'preserve',
            preserveFragment: true,
          },
        );
      }
    });
  }

  public logout(): void {
    this.authService.logout();
  }
}
