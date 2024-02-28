import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { BackendErrorMessages } from '../../../shared/components/backendErrorMessages/backendErrorMessages.component';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
    selector: 'mc-login',
    templateUrl: './login.component.html',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        CommonModule,
        BackendErrorMessages
    ],
    standalone: true,
})
export class LoginComponent {
    form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
    });
    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        backendErrors: this.store.select(selectValidationErrors),
    })

    constructor(private formBuilder: FormBuilder, private store: Store) {}

    onSubmit() {
        console.log('form', this.form.getRawValue());
        const request: LoginRequestInterface = {
            user: this.form.getRawValue(),
        }
        this.store.dispatch(authActions.login({request}));
    }
}