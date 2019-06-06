import { NgModule } from '@angular/core';
import { FullContentComponent } from './abc/full-content/full-content.component';
import { NgAlainDelonRoutingModule } from './ng-alain-delon-routing.module';
import { DelonAbcComponent } from './abc/delon-abc.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [DelonAbcComponent, FullContentComponent],
  imports: [NgAlainDelonRoutingModule, SharedModule],
})
export class NgAlainDelonModule {}
