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
        await addToHistory(userId, keyword);
        return keyword;
    }
);

export const removeKeywordFromHistory = createAsyncThunk(
    "history/removeKeywordFromHistory",
    async ({ userId, keyword }) => {
        await removeFromHistory(userId, keyword);
        return keyword;
    }
);
