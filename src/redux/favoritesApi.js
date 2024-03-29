// import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
// import { get, push, ref, remove } from "firebase/database";
// import { database } from "../db/db";

// export const favoritesApi = createApi({
//     baseQuery: fakeBaseQuery(),
//     endpoints: (build) => ({
//         addToFavorites: build.mutation({
//             async queryFn(userId, movieId) {
//                 try {
//                     const newFavoriteRef = ref(
//                         database,
//                         `favorites/${userId}/favorites`
//                     );
//                     await push(newFavoriteRef, movieId);
//                     const favorites = await get(newFavoriteRef).val();
//                     return { data: favorites };
//                 } catch (err) {
//                     return { error: err };
//                 }
//             },
//         }),
//         removeFavorite: build.mutation({
//             async queryFn(movieId) {
//                 try {
//                     const favoritesRef = ref(database, "favorites/");
//                     await remove(favoritesRef, movieId);
//                     return { data: movieId };
//                 } catch (err) {
//                     return { error: err };
//                 }
//             },
//         }),
//     }),
// });

// export const { useAddToFavoritesMutation, useRemoveFavoriteMutation } =
//     favoritesApi;
