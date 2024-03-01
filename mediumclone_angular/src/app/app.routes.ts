import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'register',
        loadChildren: () => import('src/app/auth/auth.routes').then((module) => module.registerRoutes)
    },
    {
        path: 'login',
        loadChildren: () => import('src/app/auth/auth.routes').then((module) => module.loginRoutes)
    },
    {
        path: '',
        loadChildren: () => import('src/app/globalFeed/globalFeed.routes').then((module) => module.routes)
    },
    {
        path: 'feed',
        loadChildren: () => import('src/app/yourFeed/yourFeed.routes').then((module) => module.routes)
    },
    {
        path: 'tags/:slug',
        loadChildren: () => import('src/app/tagFeed/tagFeed.routes').then((module) => module.routes)
    },
    {
        path: 'articles/:slug',
        loadChildren: () => import('src/app/article/article.routes').then((module) => module.routes)
    }
];