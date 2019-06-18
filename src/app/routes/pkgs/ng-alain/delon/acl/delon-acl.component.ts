import { Component } from '@angular/core';
import { ACLService } from '@delon/acl';

/*
 * https://netlify.ng-alain.com/acl/getting-started/en
 */
@Component({
  selector: 'app-delon-abc',
  templateUrl: './delon-acl.component.html',
})
export class DelonAclComponent {
  constructor(public aclService: ACLService) {}

  public setRole() {
    this.aclService.setRole(['a']);
  }

  public setFull() {
    this.aclService.setFull(!this.aclService.data.full);
  }

  public setAbility() {
    this.aclService.setAbility(['x']);
  }

  public set() {
    this.aclService.set({
      role: ['a', 'b'],
      ability: ['x', 'y'],
      except: false,
      mode: 'oneOf',
    });
  }

  public add() {
    this.aclService.add({
      role: ['c'],
      ability: ['z'],
    });
  }
}
