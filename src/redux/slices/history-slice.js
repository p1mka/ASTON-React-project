import { createSlice } from "@reduxjs/toolkit";
import {
    addKeywordToHistory,
    getHistory,
    removeKeywordFromHistory,
} from "../thunks/history";

const initialState = {
    keywords: [],
    isLoading: false,
};

export const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        clearHistory: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHistory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getHistory.fulfilled, (state, action) => {
                state.keywords = action.payload;
                state.isLoading = false;
            })
            .addCase(getHistory.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(addKeywordToHistory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addKeywordToHistory.fulfilled, (state, action) => {
                state.keywords.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addKeywordToHistory.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(removeKeywordFromHistory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeKeywordFromHistory.fulfilled, (state, action) => {
                state.keywords = state.keywords.filter(
                    (item) => item.id !== action.payload
                );
                state.isLoading = false;
            })
            .addCase(removeKeywordFromHistory.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const { clearHistory } = historySlice.actions;
