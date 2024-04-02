import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesIds, selectUserId } from "../redux/selectors";
import { addFavorite, removeFavorite } from "../redux/thunks/favorite";
import { useState } from "react";

export const useFavorites = () => {
    const [isFavoriteLoading, setIsFavoriteLoading] = useState(false);

    const dispatch = useDispatch();
    const favoritesIds = useSelector(selectFavoritesIds);
    const userId = useSelector(selectUserId);

    const favoritesCount = favoritesIds.length;

    const getIsFavorite = (movieId) => favoritesIds.includes(movieId);

    const toggleFavorites = async (movieId) => {
        if (!getIsFavorite(movieId)) {
            setIsFavoriteLoading(true);
            await dispatch(addFavorite({ userId, movieId }));
            setIsFavoriteLoading(false);
        } else {
            setIsFavoriteLoading(true);
            await dispatch(removeFavorite({ userId, movieId }));
            setIsFavoriteLoading(false);
        }
    };

    return {
        isFavoriteLoading,
        favoritesCount,
        favoritesIds,
        getIsFavorite,
        toggleFavorites,
    };
};
