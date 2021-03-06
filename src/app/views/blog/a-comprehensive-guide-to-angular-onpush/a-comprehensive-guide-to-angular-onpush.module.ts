import { NgModule } from '@angular/core';
import { X0101Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/01/x-01-01.component';
import { X01Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/01/x-01.component';
import { X020101Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/01/x-02-01-01.component';
import { X0201Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/01/x-02-01.component';
import { X020201Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/02/x-02-02-01.component';
import { X0202Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/02/x-02-02.component';
import { X020301Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/03/01/x-02-03-01.component';
import { X020302Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/03/02/x-02-03-02.component';
import { X020303Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/03/03/x-02-03-03.component';
import { X0203Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/03/x-02-03.component';
import { X0204Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/04/x-02-04.component';
import { X020501Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/05/x-02-05-01.component';
import { X020502Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/05/x-02-05-02.component';
import { X0205Component } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/02/05/x-02-05.component';
import { AComprehensiveGuideToAngularOnpushRoutingModule } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/a-comprehensive-guide-to-angular-onpush-routing.module';
import { AComprehensiveGuideToAngularOnpushComponent } from '@app/views/blog/a-comprehensive-guide-to-angular-onpush/a-comprehensive-guide-to-angular-onpush.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AComprehensiveGuideToAngularOnpushComponent,
    X01Component,
    X0101Component,
    X0201Component,
    X020101Component,
    X0202Component,
    X020201Component,
    X0203Component,
    X020301Component,
    X020302Component,
    X020303Component,
    X0204Component,
    X0205Component,
    X020501Component,
    X020502Component,
  ],
  imports: [SharedModule, AComprehensiveGuideToAngularOnpushRoutingModule],
})
export class AComprehensiveGuideToAngularOnpushModule {}
