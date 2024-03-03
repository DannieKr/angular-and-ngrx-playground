import { MealStateInterface } from '../types/mealState.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import { mealActions } from './actions';

const initialState: MealStateInterface = {
    isLoading: false,
    error: null,
    data: null,
}

const mealFeature = createFeature({
    name: 'meal',
    reducer: createReducer(
        initialState,
        on(mealActions.getMeal, (state) => ({...state, isLoading: true})),
        on(mealActions.getMealSuccess, (state, action) => ({...state, isLoading: true, data: action.meal})),
        on(mealActions.getMealFailure, (state) => ({...state, isLoading: false})),
    )
})

export const {
                 name: mealFeatureKey,
                 reducer: mealReducer,
                 selectIsLoading,
                 selectError,
                 selectData: selectMealData,
             } = mealFeature;