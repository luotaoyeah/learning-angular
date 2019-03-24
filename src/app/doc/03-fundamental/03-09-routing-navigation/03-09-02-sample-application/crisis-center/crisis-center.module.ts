import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/primeng';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';

@NgModule({
  declarations: [CrisisCenterComponent, CrisisListComponent, CrisisDetailComponent, CrisisHomeComponent],
  imports: [CommonModule, FormsModule, CrisisCenterRoutingModule, ...[PanelModule, ButtonModule, InputTextModule]]
})
export class CrisisCenterModule {}