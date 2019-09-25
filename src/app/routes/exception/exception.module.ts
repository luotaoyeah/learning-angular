import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { ExceptionRoutingModule } from './exception-routing.module';
import { Exception403Component } from './403.component';
import { Exception404Component } from './404.component';
import { Exception500Component } from './500.component';

const COMPONENTS = [Exception403Component, Exception404Component, Exception500Component];

@NgModule({
  imports: [SharedModule, ExceptionRoutingModule],
  declarations: [...COMPONENTS],
})
export class ExceptionModule {}
