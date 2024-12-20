import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./features/posts";

const rootReducer = combineReducers({
	posts: postReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
