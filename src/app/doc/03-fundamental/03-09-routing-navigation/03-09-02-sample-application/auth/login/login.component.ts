import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLogin) {
        this.router.navigateByUrl(
          this.authService.redirectUrl
            ? this.router.parseUrl(this.authService.redirectUrl)
            : '/doc/fundamental/routing/sample-application/admin',
          {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          }
        );
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
