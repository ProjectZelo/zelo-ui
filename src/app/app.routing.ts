import { Route } from '@angular/router';

/**
 * TODO: Create modiules for each page in zelo
 */
export const appRoutes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadChildren: () => import('./modules/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'receive',
        loadChildren: () => import('./modules/pages/receive/receive.module').then(m => m.ReceiveModule)
    },
    {
        path: 'buy',
        loadChildren: () => import('./modules/pages/buy/buy.module').then(m => m.BuyModule)
    },
    {
        path: 'earn',
        loadChildren: () => import('./modules/pages/earn/earn.module').then(m => m.EarnModule)
    },
    {
        path: 'robo',
        loadChildren: () => import('./modules/pages/robo/robo.module').then(m => m.RoboModule)
    },
    {
        path: 'send',
        loadChildren: () => import('./modules/pages/send/send.module').then(m => m.SendModule)
    }
];
