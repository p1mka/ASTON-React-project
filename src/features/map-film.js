export const mapFilm = (film) => ({
    id: film.kinopoiskId,
    countries: film.countries,
    title: film.nameRu || film.nameOriginal,
    description: film?.description || "Описание фильма еще не подготовлено...",
    imgUrl: film?.posterUrl,
    previewImgUrl: film?.posterUrlPreview,
    genres: film?.genres,
    rating: film.ratingKinopoisk
        ? String(film.ratingKinopoisk)
        : film.rating === "null"
          ? "0"
          : film.rating,
    year: String(film?.year),
});
