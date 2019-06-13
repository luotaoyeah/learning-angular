import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Doc050402Service {
  public syncGet(): string {
    return 'foo';
  }

  public async asyncGet(): Promise<string> {
    return new Promise<string>((resolve: (value: string) => void) => {
      setTimeout(() => {
        resolve('foo');
      }, 1000);
    });
  }
}