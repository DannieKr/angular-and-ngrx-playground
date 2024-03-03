import { Routes, Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: 'meal/:name',
        loadChildren: () => import('./meal/meal.routes').then((module) => module.routes),
    },
];
