import { Loader } from "../../components";
import { useGetFilmsQuery } from "../../redux";
import { FilmCards } from "./components";

export const MainPage = () => {
    const { data: films, isError, isLoading } = useGetFilmsQuery();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <h1>Ошибка загрузки данных</h1>;
    }

    return <FilmCards films={films} />;
};
