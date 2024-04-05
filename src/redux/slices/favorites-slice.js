import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, getFavorites, removeFavorite } from "../thunks/favorite";

const initialState = {
    ids: [],
    isLoading: true,
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        clearFavorites: () => initialState,
    },
    extraReducers: (build) => {
        build
            .addCase(getFavorites.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFavorites.fulfilled, (state, action) => {
                state.ids = action.payload;
                state.isLoading = false;
            })
            .addCase(addFavorite.fulfilled, (state, action) => {
                state.ids.push(action.payload);
            })
            .addCase(removeFavorite.fulfilled, (state, action) => {
                state.ids = state.ids.filter((id) => id !== action.payload);
            });
    },
});

export const { clearFavorites } = favoritesSlice.actions;
