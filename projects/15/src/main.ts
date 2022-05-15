import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { FooComponent } from './app/routes/foo/foo.component';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter([
            {
                path: 'foo',
                component: FooComponent,
            },
            {
                path: 'bar',
                loadChildren: () => import('./app/routes/bar/bar.component.route').then((i) => i.routes),
            },
        ]),
    ],
}).catch((err) => console.error(err));
