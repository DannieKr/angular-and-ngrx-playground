import { createEffect, Actions, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { switchMap, of, map, catchError } from 'rxjs';
import { articleActions } from './actions';
import { ArticleService as SharedArticleService } from '../../shared/services/article.service';
import { ArticleInterface } from '../../shared/types/article.interface';

export const getArticleEffect = createEffect(
    (
        actions$ = inject(Actions),
        articleService = inject(SharedArticleService)) => {
        return actions$.pipe(
            ofType(articleActions.getArticle),
            switchMap(({slug}) => {
                return articleService.getArticle(slug).pipe(
                    map((article: ArticleInterface) => {
                        return articleActions.getArticleSuccess({article})
                    }),
                    catchError(() => {
                        return of(articleActions.getArticleFailure())
                    })
                )
            })
        )
    },
    {functional: true}
)