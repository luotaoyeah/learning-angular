import { NgModule } from '@angular/core';
import { NgAlainDelonAclRoutingModule } from './ng-alain-delon-acl-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAclComponent } from './delon-acl.component';

@NgModule({
  declarations: [DelonAclComponent],
  imports: [NgAlainDelonAclRoutingModule, SharedModule],
})
export class NgAlainDelonAclModule {}
