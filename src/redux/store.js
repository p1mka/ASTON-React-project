import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./filmsApi";
import { favoritesSlice, historySlice, userSlice } from "./slices";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    favorites: favoritesSlice.reducer,
    history: historySlice.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmsApi.middleware),
});
