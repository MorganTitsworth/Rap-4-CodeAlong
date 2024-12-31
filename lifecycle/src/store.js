import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./features/posts";
import userReducer from "./features/user";

const rootReducer = combineReducers({
	posts: postReducer,
	user: userReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
