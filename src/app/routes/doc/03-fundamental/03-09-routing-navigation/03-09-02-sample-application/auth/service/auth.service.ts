import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin = false;
  public redirectUrl = '';

  constructor() {}

  public login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLogin = true;
      }),
    );
  }

  public logout() {
    this.isLogin = false;
  }
}
