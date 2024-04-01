import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchPhrase: "",
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSearchPhrase(state, action) {
            state.searchPhrase = action.payload;
        },
    },
});

export const { setSearchPhrase } = appSlice.actions;
