import { createSelector } from "@reduxjs/toolkit";

const selectHistory = (state) => state.history;

export const selectHistoryKeywords = createSelector(
    [selectHistory],
    (historyState) => historyState.keywords
);

export const selectHistoryIsLoading = createSelector(
    [selectHistory],
    (historyState) => historyState.isLoading
);
