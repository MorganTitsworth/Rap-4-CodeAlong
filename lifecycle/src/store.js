import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import postReducer from '../src/features/posts'
import userReducer from '../src/features/user'

const rootReducer = combineReducers({
    posts: postReducer,
    user: userReducer
});

export const store = configureStore({
    reducer: rootReducer,
});
