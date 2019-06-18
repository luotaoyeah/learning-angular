import { NgModule } from '@angular/core';
import { NgAlainDelonAclRoutingModule } from './ng-alain-delon-acl-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAclComponent } from './delon-acl.component';
import { AclServiceComponent } from './acl-service/acl-service.component';
import { AclDirectiveComponent } from './acl-directive/acl-directive.component';
import { AclIfDirectiveComponent } from './acl-if-directive/acl-if-directive.component';
import { AclGuardComponent } from './acl-guard/acl-guard.component';
import { AclGuard01Component } from './acl-guard/01/acl-guard-01.component';

@NgModule({
  declarations: [
    DelonAclComponent,
    AclServiceComponent,
    AclDirectiveComponent,
    AclIfDirectiveComponent,
    AclGuardComponent,
    AclGuard01Component,
  ],
  imports: [SharedModule, NgAlainDelonAclRoutingModule],
})
export class NgAlainDelonAclModule {}
