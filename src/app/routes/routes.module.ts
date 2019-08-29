import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { RoutesRoutingModule } from './routes-routing.module';
import { PassportLoginComponent } from '../layout/passport/login/passport-login.component';
import { CallbackComponent } from '../layout/callback/callback.component';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [PassportLoginComponent, CallbackComponent];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule],
  declarations: [...COMPONENTS, HomeComponent],
})
export class RoutesModule {}
