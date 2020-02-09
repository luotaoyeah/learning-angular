import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchematicsRoutingModule } from './schematics-routing.module';
import { SharedModule } from '@app/shared';
import { SchematicsComponent } from './schematics.component';

@NgModule({
  declarations: [SchematicsComponent],
  imports: [CommonModule, SchematicsRoutingModule, SharedModule],
})
export class SchematicsModule {}
