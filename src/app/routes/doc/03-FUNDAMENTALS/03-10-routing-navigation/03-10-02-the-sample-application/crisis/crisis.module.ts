import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisComponent } from './crisis.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';

@NgModule({
  declarations: [
    CrisisComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisHomeComponent,
  ],
  imports: [SharedModule, CrisisRoutingModule],
})
export class CrisisModule {}
