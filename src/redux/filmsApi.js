import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mapFilm, mapFilms } from "../features";

export const filmsApi = createApi({
    reducerPath: "filmsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.VITE_KINOPOISK_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", process.env.VITE_KINOPOISK_TOKEN);
            return headers;
        },
    }),
    endpoints: (build) => ({
        getFilms: build.query({
            query: () => ``,
            transformResponse: (res) => mapFilms(res.items),
        }),
        getFilmById: build.query({
            query: (id) => id,
            transformResponse: (res) => mapFilm(res),
        }),
        getFilmsByIds: build.query({
            queryFn: async (ids) => {
                try {
                    const requests = ids.map(async (id) => {
                        const res = await fetch(
                            `${process.env.VITE_KINOPOISK_BASE_URL}/${id}`,
                            {
                                method: "GET",
                                headers: {
                                    "X-API-KEY":
                                        process.env.VITE_KINOPOISK_TOKEN,
                                },
                            }
                        );
                        return await res.json();
                    });
                    const films = await Promise.all(requests);

                    return { data: mapFilms(films) };
                } catch (err) {
                    return { error: err };
                }
            },
        }),
    }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery, useGetFilmsByIdsQuery } =
    filmsApi;
