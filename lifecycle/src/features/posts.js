import { db } from "../api/firebase-config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, updateDoc, setDoc, deleteDoc, addDoc, getDocs, getDoc } from "firebase/firestore";

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
		return error;
	}
});

export const addPost = createAsyncThunk("posts/addPost", async ({ content, uid, like }) => {
	try {
		console.log("uid:", uid);
		let newContent = {
			uid: uid,
			content: content,
			like: like,
		};
		const docRef = await addDoc(collection(db, "posts"), newContent);
		const docQuery = await getDoc(docRef);
		return { id: docQuery.id, ...docQuery.data() };
	} catch (error) {
		console.error(error);
	}
});

export const updateDocument = createAsyncThunk("posts/updateDocument", async ({ changes, id }) => {
	try {
		const docRef = doc(db, "posts", id);
		await updateDoc(docRef, { content: changes });
		const docQuery = await getDoc(docRef);
		return { id: docQuery.id, ...docQuery.data() };
	} catch (error) {
		console.error(error);
	}
});

export const deleteDocument = createAsyncThunk("posts/deleteDocument", async (id) => {
	try {
		const docRef = doc(db, "posts", id);
		await deleteDoc(docRef);
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
				state.posts.push({ ...action.payload });
			})
			.addCase(addPost.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(updateDocument.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateDocument.fulfilled, (state, action) => {
				state.loading = false;
				const post = state.posts.find((post) => post.id === action.payload.id);
				if (post) {
					post.content = action.payload.content;
				}
			})
			.addCase(updateDocument.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(deleteDocument.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteDocument.fulfilled, (state, action) => {
				const id = action.meta.arg;
				state.loading = false;
				state.posts = state.posts.filter((post) => post.id !== id);
			})
			.addCase(deleteDocument.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default postSlice.reducer;
