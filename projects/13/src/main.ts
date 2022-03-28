import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@app/app.module';
import { environment } from '@app/env/environment';
import { SafeAny } from './typings';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule, {
      defaultEncapsulation: ViewEncapsulation.Emulated,
      ngZone: 'zone.js',
    })
    .then((res) => {
      if ((window as SafeAny).appBootstrap) {
        (window as SafeAny).appBootstrap();
      }
      return res;
    });
};

bootstrap();
