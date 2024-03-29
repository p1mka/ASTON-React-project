import { createSelector } from "@reduxjs/toolkit";

const selectFavoritesState = (state) => state.favorites;

export const selectFavoritesIds = createSelector(
    [selectFavoritesState],
    (favoritesState) => favoritesState.ids
);

export const selectFavoritesIsLoading = createSelector(
    [selectFavoritesState],
    (favoritesState) => favoritesState.isLoading
);
