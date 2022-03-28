import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingItemsWithNgforTrackbyComponent } from '@app/routes/built-in-directives/tracking-items-with-ngfor-trackby/tracking-items-with-ngfor-trackby.component';

const routes: Routes = [
    {
        path: 'tracking-items-with-ngfor-trackby',
        component: TrackingItemsWithNgforTrackbyComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BuiltInDirectivesRoutingModule {}
