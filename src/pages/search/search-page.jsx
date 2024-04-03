import { useGetSearchedFilmsQuery } from "../../redux";
import { Loader } from "../../components";
import { FilmCards } from "../main/components";
import { useQueryParams } from "../../hooks";
import styled from "styled-components";

const SearchPageContainer = ({ className }) => {
    const searchKeyword = useQueryParams();

    const {
        data: films,
        isLoading,
        isError,
    } = useGetSearchedFilmsQuery(searchKeyword);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <h3>Ошибка поиска данных...</h3>;
    }

    return (
        <div className={className}>
            <h2>Результаты поиска по запросу {searchKeyword}</h2>
            {films.length ? (
                <FilmCards films={films} />
            ) : (
                <p>По запросу {searchKeyword} ничего не найдено...</p>
            )}
        </div>
    );
};

const SearchPage = styled(SearchPageContainer)``;

export default SearchPage;
