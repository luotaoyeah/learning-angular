import { InjectionToken } from '@angular/core';

const TOKEN = new InjectionToken<Storage>('localstorage', {
  providedIn: 'root',
  factory: () => window.localStorage,
});

export { TOKEN };
