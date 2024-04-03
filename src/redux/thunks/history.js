import {
    addToHistory,
    getHistoryFromDb,
    removeFromHistory,
} from "../../db/actions/history-actions";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHistory = createAsyncThunk(
    "history/getHistory",
    async ({ userId }) => {
        const history = await getHistoryFromDb(userId);
        return history;
    }
);

export const addKeywordToHistory = createAsyncThunk(
    "history/addKeywordToHistory",
    async ({ userId, keyword }) => {
        const keywordWithId = await addToHistory(userId, keyword);

        return keywordWithId;
    }
);

export const removeKeywordFromHistory = createAsyncThunk(
    "history/removeKeywordFromHistory",
    async ({ userId, id }) => {
        await removeFromHistory(userId, id);
        return id;
    }
);
