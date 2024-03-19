import { Loader } from "../../components";
import { mapFilms } from "../../features";
import { useGetFilmsQuery } from "../../redux";
import { FilmCards } from "./components";

export const Main = () => {
    const { data = [], isError, isLoading } = useGetFilmsQuery();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <h1>Ошибка загрузки данных</h1>;
    }

    const films = mapFilms(data.items);

    return <FilmCards films={films} />;
};
