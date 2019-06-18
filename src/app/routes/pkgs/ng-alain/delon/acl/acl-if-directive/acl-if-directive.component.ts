import { Component } from '@angular/core';
import { ACLService } from '@delon/acl';

@Component({
  selector: 'app-acl-if-directive',
  templateUrl: './acl-if-directive.component.html',
})
export class AclIfDirectiveComponent {
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

  public attachAbility() {
    this.aclService.attachAbility(['a01']);
  }

  public removeAbility() {
    this.aclService.removeAbility(['a01']);
  }
}
