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
            rating: film.ratingKinopoisk
                ? String(film.ratingKinopoisk)
                : film.ratingKinopoisk === null ||
                    film.rating === "null" ||
                    film.rating === "undefined"
                  ? "0"
                  : film.rating,
            year:
                film.year === "null" || film.year === null
                    ? "Неизвестен"
                    : String(film.year),
        };
    });
};
