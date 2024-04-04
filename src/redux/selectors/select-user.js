import { createSelector } from "@reduxjs/toolkit";

const selectUserState = (state) => state.user;

export const selectUserId = createSelector(
    [selectUserState],
    (userState) => userState.id
);
export const selectUserEmail = createSelector(
    [selectUserState],
    (userState) => userState.email
);
