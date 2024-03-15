export const mapFilms = (films) => {
    return films.map((film) => {
        return {
            id: film.kinopoiskId,
            title: film.nameRu || film.nameOriginal,
            imgUrl: film.posterUrl,
            previewImgUrl: film.posterUrlPreview,
            genres: film.genres,
            rating: film.ratingKinopoisk,
            year: film.year,
        };
    });
};
