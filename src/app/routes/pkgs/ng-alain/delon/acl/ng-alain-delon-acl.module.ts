import { NgModule } from '@angular/core';
import { NgAlainDelonAclRoutingModule } from './ng-alain-delon-acl-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAclComponent } from './delon-acl.component';
import { AclServiceComponent } from './acl-service/acl-service.component';
import { AclDirectiveComponent } from './acl-directive/acl-directive.component';

@NgModule({
  declarations: [DelonAclComponent, AclServiceComponent, AclDirectiveComponent],
  imports: [NgAlainDelonAclRoutingModule, SharedModule],
})
export class NgAlainDelonAclModule {}
