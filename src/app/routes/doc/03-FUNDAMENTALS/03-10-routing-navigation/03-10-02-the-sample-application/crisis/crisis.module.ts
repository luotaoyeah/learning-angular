import { NgModule } from '@angular/core';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PanelModule } from 'primeng/panel';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisHomeComponent,
  ],
  imports: [SharedModule, CrisisRoutingModule, ...[PanelModule]],
})
export class CrisisModule {}
