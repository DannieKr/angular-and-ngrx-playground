import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/actions';
import { selectFeedData, selectIsLoading, selectError } from './store/reducers';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../errorMessage/errorMessage.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
    selector: 'mc-feed',
    templateUrl: './feed.component.html',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        ErrorMessageComponent,
        LoadingComponent,
    ],
})
export class FeedComponent implements OnInit{
    @Input() apiUrl: string = '';

    data$ = combineLatest({
        isLoading: this.store.select(selectIsLoading),
        error: this.store.select(selectError),
        feed: this.store.select(selectFeedData)
    })

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(feedActions.getFeed({url: this.apiUrl}));
    }
}