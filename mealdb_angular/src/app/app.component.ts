import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealComponent } from './meal/components/meal/meal.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MealComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'mealdb_angular';
}
