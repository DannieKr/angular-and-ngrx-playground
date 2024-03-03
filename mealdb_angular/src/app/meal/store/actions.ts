import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MealInterface } from '../types/meal.interface';

export const mealActions = createActionGroup({
    source: 'meal',
    events: {
        'Get meal': props<{name: string}>(),
        'Get meal success': props<{meal: MealInterface}>(),
        'Get meal failure': emptyProps,
    }
})