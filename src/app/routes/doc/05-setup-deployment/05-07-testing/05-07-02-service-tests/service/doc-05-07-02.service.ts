import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Doc050702Service {
  constructor() {}

  syncGet(): string {
    return 'foo';
  }

  async asyncGet(): Promise<string> {
    return new Promise<string>((resolve: (value: string) => void) => {
      setTimeout(() => {
        resolve('foo');
      }, 1000);
    });
  }
}
