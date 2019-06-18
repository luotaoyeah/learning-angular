import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NgAlainDelonAbcModule } from './abc/ng-alain-delon-abc.module';
import { NgAlainDelonAclModule } from './acl/ng-alain-delon-acl.module';

@NgModule({
  imports: [SharedModule, NgAlainDelonAbcModule, NgAlainDelonAclModule],
})
export class NgAlainDelonModule {}
