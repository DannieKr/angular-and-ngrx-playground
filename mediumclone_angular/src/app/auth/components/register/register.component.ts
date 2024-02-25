import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { selectIsSubmitting } from '../../store/reducers';
import { AuthStateInterface } from '../../types/authState.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        CommonModule,
    ],
    standalone: true,
})
export class RegisterComponent {
    form = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
    });
    isSubmitting$ = this.store.select(selectIsSubmitting);

    constructor(private formBuilder: FormBuilder, private store: Store<{auth: AuthStateInterface}>) {}

    onSubmit() {
        console.log('form', this.form.getRawValue());
        const request: RegisterRequestInterface = {
            user: this.form.getRawValue(),
        }
        this.store.dispatch(register({request}));
    }
}