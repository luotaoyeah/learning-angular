import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin: boolean = false;
  public redirectUrl: string = '';

  public login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLogin = true;
      }),
    );
  }

  public logout(): void {
    this.isLogin = false;
  }
}
