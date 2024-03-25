import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
};

export const isAuth = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        toggleAuth(state, action) {
            state.auth = action.payload;
        },
    },
});

export const { toggleAuth } = isAuth.actions;
