import { Component } from '@angular/core';
import { ACLService } from '@delon/acl';

@Component({
  selector: 'app-acl-service',
  templateUrl: './acl-service.component.html',
})
export class AclServiceComponent {
  constructor(public aclService: ACLService) {}

  public setFull() {
    this.aclService.setFull(!this.aclService.data.full);
  }

  public set() {
    this.aclService.set({
      role: ['r01', 'r02'],
      ability: ['a01', 'a02'],
      except: false,
      mode: 'oneOf',
    });
  }

  public add() {
    this.aclService.add({
      role: ['r03'],
      ability: ['a03'],
    });
  }

  public setRole() {
    this.aclService.setRole(['r04']);
  }

  public attachRole() {
    this.aclService.attachRole(['r05', 'r06']);
  }

  public removeRole() {
    this.aclService.removeRole(['r05', 'r06']);
  }

  public setAbility() {
    this.aclService.setAbility(['a04']);
  }

  public attachAbility() {
    this.aclService.attachAbility(['a05', 'a06']);
  }

  public removeAbility() {
    this.aclService.removeAbility(['a05', 'a06']);
  }
}
