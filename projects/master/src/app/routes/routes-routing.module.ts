import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePipeComponent } from '@app/routes/api/common/date-pipe/date-pipe.component';
import { HomeComponent } from '@app/routes/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'api/common/DatePipe', component: DatePipeComponent },
    {
        path: 'guide/built-in-directives',
        loadChildren: () => import('../routes/built-in-directives/built-in-directives.module').then((m) => m.BuiltInDirectivesModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutesRoutingModule {}
