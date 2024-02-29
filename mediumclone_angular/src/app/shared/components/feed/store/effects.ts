import { createEffect, Actions, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { switchMap, of, map, catchError } from 'rxjs';
import { FeedService } from '../services/feed.service';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { feedActions } from './actions';

export const getFeedEffect = createEffect(
    (
        actions$ = inject(Actions),
        feedService = inject(FeedService)) => {
        return actions$.pipe(
            ofType(feedActions.getFeed),
            switchMap(({url}) => {
                return feedService.getFeed(url).pipe(
                    map((feed: GetFeedResponseInterface) => {
                        return feedActions.getFeedSuccess({feed})
                    }),
                    catchError(() => {
                        return of(feedActions.getFeedFailure())
                    })
                )
            })
        )
    },
    {functional: true}
)