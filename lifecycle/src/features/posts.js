import db from "../api/firebase-config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const getPostsData = createAsyncThunk("posts/getPostsData", async () => {
	try {
		const postsQuery = await getDocs(collection(db, "posts"));
		const postsInfo = postsQuery.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return postsInfo;
	} catch (error) {
		console.log(error);
	}
});

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getPostsData.pending, (state) => {
				state.loading = true;
			})
			.addCase(getPostsData.fulfilled, (state, action) => {
				state.loading = false;
				state.posts = action.payload;
			})
			.addCase(getPostsData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default postSlice.reducer;
