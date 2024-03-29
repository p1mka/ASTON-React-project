import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    favorites: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.favorites = action.payload?.favorites;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.favorites = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
