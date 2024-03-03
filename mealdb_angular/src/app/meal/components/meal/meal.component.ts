import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { mealActions } from '../../store/actions';
import { combineLatest } from 'rxjs';
import { selectIsLoading, selectMealData } from '../../store/reducers';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'md-meal',
    templateUrl: './meal.component.html',
    standalone: true,
    imports: [
        CommonModule
    ],
})
export class MealComponent implements OnInit{
    name = this.route.snapshot.paramMap.get('name')??'';
    data$ = combineLatest({
        isLoading: this.store.select(selectIsLoading),
        meal: this.store.select(selectMealData)
    })

    constructor(private route:ActivatedRoute, private store: Store) {}
    ngOnInit(): void {
        this.store.dispatch(mealActions.getMeal({name: this.name}));
    }
}