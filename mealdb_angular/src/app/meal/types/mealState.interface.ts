import { MealInterface } from './meal.interface';

export interface MealStateInterface {
    isLoading: boolean,
    error: string | null,
    data: MealInterface | null,
}