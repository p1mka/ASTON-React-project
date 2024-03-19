export const mapFilm = (film) => ({
    id: film.kinopoiskId,
    countries: film.countries,
    title: film.nameRu || film.nameOriginal,
    description: film.description || "Описание фильма еще не подготовлено...",
    imgUrl: film.posterUrl,
});
