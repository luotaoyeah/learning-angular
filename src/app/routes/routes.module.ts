import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RoutesRoutingModule } from './routes-routing.module';
// passport pages
import { LoginComponent } from './passport/login/login.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
  // passport pages
  LoginComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
];

// tslint:disable-next-line:no-any
const COMPONENTS_NOROUNT: Array<any> = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, HomeComponent],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule {}
