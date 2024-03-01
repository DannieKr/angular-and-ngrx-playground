import { createEffect, Actions, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { switchMap, map, catchError, of } from 'rxjs';
import { UserProfileService } from '../services/userProfile.serivce';
import { userProfileActions } from './actions';
import { UserProfileInterface } from '../types/userProfile.interface';

export const getUserProfileEffect = createEffect(
    (
        actions$ = inject(Actions),
        userProfileService = inject(UserProfileService)) => {
        return actions$.pipe(
            ofType(userProfileActions.getUserProfile),
            switchMap(({slug}) => {
                return userProfileService.getUserProfile(slug).pipe(
                    map((userProfile: UserProfileInterface) => {
                        return userProfileActions.getUserProfileSuccess({userProfile})
                    }),
                    catchError(() => {
                        return of(userProfileActions.getUserProfileFailure())
                    })
                )
            })
        )
    },
    {functional: true}
)