import { useGetFilmsByIdsQuery } from "../../redux";
import { FilmCards } from "../main/components";
import { useFavorites } from "../../hooks/";

const FavoritesPage = () => {
    const { favoritesIds } = useFavorites();
    const {
        data: films = [],
        isLoading,
        isError,
    } = useGetFilmsByIdsQuery(favoritesIds);

    if (isError) {
        return <h2>Ошибка загрузки Избранного...</h2>;
    }

    if (!films.length && !isLoading) {
        return <h2>Вы пока не добавили в избранное ни одного фильма...</h2>;
    }

    return <div>{<FilmCards films={films} />}</div>;
};

export default FavoritesPage;
