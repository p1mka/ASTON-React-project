import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./filmsApi";
import { appSlice, favoritesSlice, historySlice, userSlice } from "./slices";

const rootReducer = combineReducers({
    app: appSlice.reducer,
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
