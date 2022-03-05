import { NgModule } from '@angular/core';
import { AuthRoutingModule } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/auth/auth-routing.module';
import { LoginComponent } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/auth/login/login.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
