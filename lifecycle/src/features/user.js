import { db, auth } from "../api/firebase-config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup, signOut as firebaseSignOut, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const signIn = createAsyncThunk("user/signIn", async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const { uid, email } = result.user;
        const userRef = doc(db, "users", uid);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            await setDoc(userRef, {
                email: email,
                id: uid,
            })
            return result.user;
        }
        return result.user;
    } catch (error) {
        console.log(error);
        return error.message;
    }
});

export const signOut = createAsyncThunk("user/signOut", async () => {
    try {
        await firebaseSignOut(auth)
        return null
    } catch (error) {
        console.log(error);
        return error.message;
        //return null anyways? 
    }
});

const initialState ={
    user: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signIn.pending, (state) => {
                state.loading = true
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(signIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(signOut.pending, (state) => {
                state.loading = true
            })
            .addCase(signOut.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(signOut.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default userSlice.reducer;