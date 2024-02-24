import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    imports: [
        RouterLink,
        ReactiveFormsModule,
    ],
    standalone: true,
})
export class RegisterComponent {
    form = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
    });
    constructor(private formBuilder: FormBuilder) {}

    onSubmit() {
        console.log('form', this.form.getRawValue());
    }
}