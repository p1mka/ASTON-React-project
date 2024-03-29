import {
    addToFavorites,
    getFavoritesIds,
    removeFromFavorites,
} from "../../db/actions/favorite-actions";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
    "favorites/getFavorites",
    async ({ userId }) => {
        const favoritesIds = await getFavoritesIds(userId);
        return favoritesIds;
    }
);

export const addFavorite = createAsyncThunk(
    "favorites/addFavorite",
    async ({ userId, movieId }) => {
        await addToFavorites(userId, movieId);
        return movieId;
    }
);

export const removeFavorite = createAsyncThunk(
    "favorites/removeFavorite",
    async ({ userId, movieId }) => {
        await removeFromFavorites(userId, movieId);
        return movieId;
    }
);
