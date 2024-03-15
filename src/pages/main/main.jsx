import { mapFilms } from "../../features";
import { useGetFilmsQuery } from "../../redux";
import { FilmCards } from "./components";

export const Main = () => {
    const { data = [], isError, isLoading } = useGetFilmsQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Ошибка загрузки данных</h1>;
    }

    const films = mapFilms(data.items);

    return <FilmCards films={films} />;
};
