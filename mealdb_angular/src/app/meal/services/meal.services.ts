import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MealResponseInterface } from '../types/mealResponse.interface';
import { MealInterface } from '../types/meal.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class MealServices{
    constructor(private http: HttpClient) {}
    getMeal(mealName: string): Observable<MealInterface> {
        const fullUrl = environment.apiUrl + 'search.php?s=' + mealName;
        return this.http.get<MealResponseInterface>(fullUrl).pipe(map(item => item.meals[0]));
    }
}