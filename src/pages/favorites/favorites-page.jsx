import { useGetFilmsByIdsQuery } from "../../redux";
import { FilmCards } from "../main/components";
import { Loader } from "../../components";
import { useFavorites } from "../../hooks/";

export const FavoritesPage = () => {
    const { favoritesIds } = useFavorites();
    const {
        data: films,
        isLoading,
        isError,
    } = useGetFilmsByIdsQuery(favoritesIds);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <h2>Ошибка загрузки Избранного...</h2>;
    }

    return (
        <div>
            {films.length ? (
                <FilmCards films={films} />
            ) : (
                <h2>Вы пока не добавили в избранное ни одного фильма...</h2>
            )}
        </div>
    );
};
