import { NgModule } from '@angular/core';
import { NgAlainDelonAbcRoutingModule } from './ng-alain-delon-abc-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAbcComponent } from './delon-abc.component';
import { FullContentComponent } from './full-content/full-content.component';

@NgModule({
  declarations: [DelonAbcComponent, FullContentComponent],
  imports: [NgAlainDelonAbcRoutingModule, SharedModule],
})
export class NgAlainDelonAbcModule {}
