import { clearFavorites, clearHistory, toggleAuth } from "../slices";
import { getFavorites } from "../thunks/favorite";
import { getHistory } from "../thunks/history";

export const isAuthMiddleware = (store) => (next) => (action) => {
    if (action.type === "user/setUser") {
        store.dispatch(getFavorites({ userId: action.payload.id }));
        store.dispatch(getHistory({ userId: action.payload.id }));
        store.dispatch(toggleAuth(true));

        return next(action);
    } else if (action.type === "user/removeUser") {
        store.dispatch(clearFavorites());
        store.dispatch(clearHistory());
        store.dispatch(toggleAuth(false));

        return next(action);
    }
    return next(action);
};
