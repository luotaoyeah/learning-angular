import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, AuthRoutingModule, PanelModule, ButtonModule],
})
export class AuthModule {}
