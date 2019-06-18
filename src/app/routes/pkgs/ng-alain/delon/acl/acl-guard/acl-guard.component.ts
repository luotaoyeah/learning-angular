import { Component } from '@angular/core';
import { ACLService } from '@delon/acl';

/*
 * https://netlify.ng-alain.com/acl/guard/en
 */
@Component({
  selector: 'app-acl-guard',
  templateUrl: './acl-guard.component.html',
})
export class AclGuardComponent {
  constructor(public aclService: ACLService) {}

  public reset() {
    this.aclService.setFull(false);
    this.aclService.set({});
  }

  public attachRole() {
    this.aclService.attachRole(['r01']);
  }

  public removeRole() {
    this.aclService.removeRole(['r01']);
  }
}
