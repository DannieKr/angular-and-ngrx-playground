import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MealServices } from '../services/meal.services';
import { switchMap, map, catchError, of } from 'rxjs';
import { mealActions } from './actions';
import { MealInterface } from '../types/meal.interface';

export const getMealEffect = createEffect(
    (
        actions$ = inject(Actions),
        mealService = inject(MealServices)) => {
        return actions$.pipe(
            ofType(mealActions.getMeal),
            switchMap(({name}) => {
                return mealService.getMeal(name).pipe(
                    map((meal: MealInterface) => {
                        return mealActions.getMealSuccess({meal })
                    }),
                    catchError(() => {
                        return of(mealActions.getMealFailure())
                    })
                )
            })
        )
    },
    {functional: true}
)