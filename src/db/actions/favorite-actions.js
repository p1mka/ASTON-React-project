import { get, push, ref, remove } from "firebase/database";
import { database } from "../db";

export const getFavoritesIds = async (userId) => {
    try {
        const moviesIdsRef = ref(database, `/favorites/${userId}/favorites`);

        const moviesIds = await get(moviesIdsRef).then((snapshot) => {
            if (snapshot.val()) {
                return Object.values(snapshot.val());
            }
            return [];
        });

        return moviesIds;
    } catch (err) {
        return err;
    }
};

export const addToFavorites = async (userId, movieId) => {
    try {
        const newFavoriteRef = ref(database, `favorites/${userId}/favorites`);
        await push(newFavoriteRef, movieId);
    } catch (err) {
        return console.log(err);
    }
};

export const removeFromFavorites = async (userId, movieId) => {
    try {
        const favoritesRef = ref(database, `favorites/${userId}/favorites`);
        const snapshot = await get(favoritesRef);
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val() === movieId) {
                    remove(childSnapshot.ref);
                }
            });
        }
    } catch (err) {
        return { error: err };
    }
};
