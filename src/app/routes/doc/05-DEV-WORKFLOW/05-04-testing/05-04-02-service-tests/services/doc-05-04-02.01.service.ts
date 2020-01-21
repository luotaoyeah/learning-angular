import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc05040201Service {
  /**
   *
   */
  public getObservableValue(): Observable<string> {
    return of('FOO');
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
  public getValue(): string {
    return 'FOO';
  }
}
