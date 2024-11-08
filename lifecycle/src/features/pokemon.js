//1) initial state
//2) action
//3) reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemon = createAsyncThunk("pokemon/getPokemon", async () => {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const initialState = {
    pokemon: {},
    loading: false,
    error: null,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemon.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPokemon.fulfilled, (state, action) => {
                state.loading = false;
                state.pokemon = action.payload;
            })
            .addCase(getPokemon.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default pokemonSlice.reducer;