import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CrisisRoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/crisis/crisis-routing.module';
import { CrisisListComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/crisis/crisis-list/crisis-list.component';
import { CrisisDetailComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/crisis/crisis-detail/crisis-detail.component';
import { CrisisComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/crisis/crisis.component';
import { CrisisHomeComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/crisis/crisis-home/crisis-home.component';

@NgModule({
  declarations: [CrisisComponent, CrisisListComponent, CrisisDetailComponent, CrisisHomeComponent],
  imports: [SharedModule, CrisisRoutingModule],
})
export class CrisisModule {}
