import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmsApi = createApi({
    reducerPath: "filmsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://kinopoiskapiunofficial.tech/api/v2.2/films",
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", "ebc6cc49-8474-4bfb-8d9a-87749055abeb");
            return headers;
        },
    }),
    endpoints: (build) => ({
        getFilms: build.query({
            query: () => ``,
        }),
        getFilmById: build.query({
            query: (id) => id,
        }),
    }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery } = filmsApi;
