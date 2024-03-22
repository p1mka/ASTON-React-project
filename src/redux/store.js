import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./filmsApi";
import { userSlice } from "./slices/user-slice";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmsApi.middleware),
});
