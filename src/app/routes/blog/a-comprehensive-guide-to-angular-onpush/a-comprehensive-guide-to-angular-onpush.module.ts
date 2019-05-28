import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComprehensiveGuideToAngularOnpushRoutingModule } from './a-comprehensive-guide-to-angular-onpush-routing.module';
import { AComprehensiveGuideToAngularOnpushComponent } from './a-comprehensive-guide-to-angular-onpush.component';
import { SharedModule } from '@shared';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';
import { X0201Component } from './02/02-01/x-02-01.component';
import { X0202Component } from './02/02-02/x-02-02.component';
import { X0203Component } from './02/02-03/x-02-03.component';
import { X020301Component } from './02/02-03/02-03-01/x-02-03-01.component';
import { X020302Component } from './02/02-03/02-03-02/x-02-03-02.component';
import { X020303Component } from './02/02-03/02-03-03/x-02-03-03.component';
import { X0204Component } from './02/02-04/x-02-04.component';
import { X020401Component } from './02/02-04/02-04-01/x-02-04-01.component';
import { X0205Component } from './02/02-05/x-02-05.component';
import { X020501Component } from './02/02-05/02-05-01/x-02-05-01.component';

@NgModule({
  declarations: [
    AComprehensiveGuideToAngularOnpushComponent,
    X01Component,
    X02Component,
    X0201Component,
    X0202Component,
    X0203Component,
    X020301Component,
    X020302Component,
    X020303Component,
    X0204Component,
    X020401Component,
    X0205Component,
    X020501Component,
  ],
  imports: [
    CommonModule,
    AComprehensiveGuideToAngularOnpushRoutingModule,
    SharedModule,
  ],
})
export class AComprehensiveGuideToAngularOnpushModule {}