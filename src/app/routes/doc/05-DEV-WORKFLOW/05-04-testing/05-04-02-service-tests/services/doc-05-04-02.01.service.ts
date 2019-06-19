import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc05040201Service {
  /**
   *
   */
  public getValue(): string {
    return 'FOO';
  }

  /**
   *
   */
  public async getPromiseValue(): Promise<string> {
    return new Promise<string>((resolve: (value: string) => void) => {
      setTimeout(() => {
        resolve('FOO');
      }, 1000);
    });
  }

  /**
   *
   */
  public getObservableValue(): Observable<string> {
    return of('FOO');
  }
}
