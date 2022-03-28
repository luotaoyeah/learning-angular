import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInDirectivesRoutingModule } from './built-in-directives-routing.module';
import { TrackingItemsWithNgforTrackbyComponent } from './tracking-items-with-ngfor-trackby/tracking-items-with-ngfor-trackby.component';

@NgModule({
    declarations: [TrackingItemsWithNgforTrackbyComponent],
    imports: [CommonModule, BuiltInDirectivesRoutingModule],
})
export class BuiltInDirectivesModule {}
