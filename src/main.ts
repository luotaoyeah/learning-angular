import 'hammerjs';
import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from '@app/env/environment';
import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule, {
      defaultEncapsulation: ViewEncapsulation.Emulated,
      ngZone: 'zone.js',
    })
    .then(res => {
      // tslint:disable-next-line:no-any
      if ((window as any).appBootstrap) {
        // tslint:disable-next-line:no-any
        (window as any).appBootstrap();
      }
      return res;
    });
};

if (environment.hmr) {
  // tslint:disable-next-line:no-any
  if ((module as any).hot) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
