import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { ExceptionRoutingModule } from '@app/views/exception/exception-routing.module';
import { Exception403Component } from '@app/views/exception/403.component';
import { Exception404Component } from '@app/views/exception/404.component';
import { Exception500Component } from '@app/views/exception/500.component';

const COMPONENTS = [Exception403Component, Exception404Component, Exception500Component];

@NgModule({
  imports: [SharedModule, ExceptionRoutingModule],
  declarations: [...COMPONENTS],
})
export class ExceptionModule {}
