import { useDispatch, useSelector } from "react-redux";
import {
    selectFavoritesIds,
    selectFavoritesIsLoading,
    selectUserId,
} from "../redux/selectors";
import {
    addFavorite,
    getFavorites,
    removeFavorite,
} from "../redux/thunks/favorite";
import { useEffect } from "react";

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favoritesIds = useSelector(selectFavoritesIds);
    const isLoading = useSelector(selectFavoritesIsLoading);
    const userId = useSelector(selectUserId);

    // useEffect(() => {
    //     console.log(userId);
    //     if (userId) {
    //         dispatch(getFavorites(userId));
    //     }
    // }, [dispatch, userId]);

    const favoritesCount = favoritesIds.length;

    const getIsFavorite = (movieId) => favoritesIds.includes(movieId);

    const toggleFavorites = (movieId) => {
        if (!getIsFavorite(movieId)) {
            dispatch(addFavorite({ userId, movieId }));
        } else {
            dispatch(removeFavorite({ userId, movieId }));
        }
    };

    return {
        isLoading,
        favoritesCount,
        favoritesIds,
        getIsFavorite,
        toggleFavorites,
    };
};
