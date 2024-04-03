export const mapFilms = (films) => {
    return films.map((film) => {
        return {
            id: film.kinopoiskId || film.filmId,
            countries: film.countries,
            title: film.nameRu || film.nameOriginal || film.nameEn,
            description:
                film.description || "Описание фильма еще не подготовлено...",
            imgUrl: film.posterUrl,
            previewImgUrl: film.posterUrlPreview,
            genres: film.genres,
            rating: String(film.ratingKinopoisk) || String(film.rating),
            year: String(film.year),
        };
    });
};
