import { db } from "../api/firebase-config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

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

export const addPost = createAsyncThunk("posts/addPost", async (content, uid) => {
	try {
		// const newContent = { content: content.postContent, like: content.like };
		const docRef = await addDoc(collection(db, "posts"), {
			uid: uid,
			content: content.postContent,
			like: content.like,
		});
		const docQuery = await getDoc(docRef);

		console.log("Document written with ID: ", docRef.id);

		return { id: docQuery.id, ...docQuery.data() };
	} catch (error) {
		console.log(error);
	}
});

export const updatePost = createAsyncThunk("posts/updatePost", async ({ changes, id }) => {
	try {
		const docRef = doc(db, "posts", id);
		await updateDoc(docRef, { content: changes });
		const docQuery = await getDoc(docRef);
		return { id: docQuery.id, ...docQuery.data() };
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
			})
			.addCase(addPost.pending, (state) => {
				state.loading = true;
			})
			.addCase(addPost.fulfilled, (state, action) => {
				state.loading = false;
				state.posts.push(action.payload);
			})
			.addCase(addPost.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(updatePost.pending, (state) => {
				state.loading = true;
			})
			.addCase(updatePost.fulfilled, (state, action) => {
				state.loading = false;
				const post = state.posts.find((post) => post.id === action.payload.id);
				if (post) {
					post.content = action.payload.content;
				}
			})
			.addCase(updatePost.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default postSlice.reducer;
