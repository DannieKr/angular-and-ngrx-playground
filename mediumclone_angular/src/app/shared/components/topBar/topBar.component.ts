import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'mc-top-bar',
    templateUrl: './topBar.component.html',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
    ],
})
export class TopBarComponent {
    data$ = combineLatest({
        currentUser: this.store.select(selectCurrentUser),
    })
    constructor(private store: Store) {}
}