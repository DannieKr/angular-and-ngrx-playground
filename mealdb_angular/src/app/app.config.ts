import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as mealEffects from './meal/store/effects';
import { provideState, provideStore } from '@ngrx/store';
import { mealFeatureKey, mealReducer } from './meal/store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHttpClient(),
      provideEffects(mealEffects),
      provideState(mealFeatureKey, mealReducer),
      provideStore(),
  ]
};
