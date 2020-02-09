import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchematicsRoutingModule } from '@app/views/package/ngrx/schematics/schematics-routing.module';
import { SharedModule } from '@app/shared';
import { SchematicsComponent } from '@app/views/package/ngrx/schematics/schematics.component';

@NgModule({
  declarations: [SchematicsComponent],
  imports: [CommonModule, SchematicsRoutingModule, SharedModule],
})
export class SchematicsModule {}
