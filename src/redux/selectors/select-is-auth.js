import { createSelector } from "@reduxjs/toolkit";

const isAuthSelector = (state) => state.auth;

export const selectIsAuth = createSelector(
    [isAuthSelector],
    (authState) => authState.auth
);

export const selectInitializeSuccess = createSelector(
    [isAuthSelector],
    (authState) => authState.initializeSuccess
);
