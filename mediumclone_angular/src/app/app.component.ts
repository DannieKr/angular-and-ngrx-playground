import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { TopBarComponent } from './shared/components/topBar/topBar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [RouterOutlet, TopBarComponent],
})
export class AppComponent {
}