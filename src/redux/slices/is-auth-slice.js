import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    initializeSuccess: false,
};

export const isAuthSlice = createSlice({
    name: "isAuth",
    initialState,
    reducers: {
        toggleAuth(state, { payload: auth }) {
            state.auth = auth;
        },
        initialize(state, { payload: initializeSuccess }) {
            state.initializeSuccess = initializeSuccess;
        },
    },
});

export const { toggleAuth, initialize } = isAuthSlice.actions;
