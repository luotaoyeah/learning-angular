import { NgModule } from '@angular/core';
import { NgAlainDelonAclRoutingModule } from './ng-alain-delon-acl-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAclComponent } from './delon-acl.component';
import { AclServiceComponent } from './acl-service/acl-service.component';
import { AclDirectiveComponent } from './acl-directive/acl-directive.component';
import { AclIfDirectiveComponent } from './acl-if-directive/acl-if-directive.component';

@NgModule({
  declarations: [
    DelonAclComponent,
    AclServiceComponent,
    AclDirectiveComponent,
    AclIfDirectiveComponent,
  ],
  imports: [NgAlainDelonAclRoutingModule, SharedModule],
})
export class NgAlainDelonAclModule {}
