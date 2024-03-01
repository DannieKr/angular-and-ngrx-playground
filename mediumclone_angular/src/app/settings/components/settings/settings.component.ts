import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { filter, combineLatest, Subscription } from 'rxjs';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { CurrentUserRequestInterface } from '../../../shared/types/currentUserRequest.interface';
import { authActions } from '../../../auth/store/actions';

@Component({
    selector: 'mc-settings',
    templateUrl: './settings.component.html',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BackendErrorMessages,
    ],
})
export class SettingsComponent implements OnInit, OnDestroy{
    currentUser?: CurrentUserInterface;
    currentUserSubscription?:Subscription;
    form = this.formBuilder.nonNullable.group({
        image: '',
        username: '',
        bio: '',
        email: '',
        password: ''
    })
    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        backendErrors: this.store.select(selectValidationErrors)
    })
    constructor(private formBuilder: FormBuilder, private store: Store) {}

    ngOnDestroy(): void {
        this.currentUserSubscription?.unsubscribe();
    }

    ngOnInit(): void {
        this.currentUserSubscription = this.store
            .pipe(select(selectCurrentUser), filter(Boolean))
            .subscribe(currentUser => {
                this.currentUser = currentUser;
                this.initializeForm()
            })
    }

    initializeForm(): void {
        if(!this.currentUser)
        {
            throw new Error('Current user is not set');
        }

        this.form.patchValue({
            image: this.currentUser.image ?? '',
            username: this.currentUser.username,
            bio: this.currentUser.bio ?? '',
            email: this.currentUser.email,
            password: ''
        })
    }

    logout(): void {
        this.store.dispatch(authActions.logout());
    }

    submit(): void{
        if (!this.currentUser) {
            throw new Error('Current user is not set');
        }
        const currentUserRequest: CurrentUserRequestInterface = {
            user: {
                ...this.currentUser,
                ...this.form.getRawValue()
            }
        }
        this.store.dispatch(authActions.updateCurrentUser({currentUserRequest: currentUserRequest}));
    }
}