import { Route } from '@angular/router';

/**
 * TODO: Create modiules for each page in zelo
 */
export const appRoutes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    }
];
