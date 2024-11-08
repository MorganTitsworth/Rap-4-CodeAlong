import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import pokemonSlice from './features/pokemon';

const rootReducer = combineReducers({
    pokemon: pokemonSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});
