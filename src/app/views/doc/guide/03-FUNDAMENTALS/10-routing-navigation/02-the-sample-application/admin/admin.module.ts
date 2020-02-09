import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { AdminRoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/admin/admin-routing.module';
import { AdminComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/admin/admin/admin.component';
import { AdminDashboardComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/admin/admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/10-routing-navigation/02-the-sample-application/admin/manage-heroes/manage-heroes.component';

@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, ManageHeroesComponent, ManageCrisesComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
