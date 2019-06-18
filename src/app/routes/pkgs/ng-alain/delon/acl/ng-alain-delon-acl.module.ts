import { NgModule } from '@angular/core';
import { NgAlainDelonAclRoutingModule } from './ng-alain-delon-acl-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAclComponent } from './delon-acl.component';
import { AclServiceComponent } from './acl-service/acl-service.component';

@NgModule({
  declarations: [DelonAclComponent, AclServiceComponent],
  imports: [NgAlainDelonAclRoutingModule, SharedModule],
})
export class NgAlainDelonAclModule {}
