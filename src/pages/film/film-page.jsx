import { FavoritesButton, Loader } from "../../components";
import { useParams } from "react-router-dom";
import { useGetFilmByIdQuery } from "../../redux";
import styled from "styled-components";

const FilmPageContainer = ({ className }) => {
    const { id } = useParams();

    const { data: film, isLoading, isError } = useGetFilmByIdQuery(id);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <h1>Ошибка загрузки данных</h1>;
    }

    const { countries, title, description, imgUrl } = film;

    return (
        <div className={className}>
            <img
                className="filmImage"
                src={imgUrl}
                alt="Картинка в пути..."
            ></img>
            <div className="filmInfo">
                <h1>{title}</h1>
                <p>{countries[0]?.country}</p>
                <p>{description}</p>
            </div>
            <FavoritesButton movieId={id} />
        </div>
    );
};

export const FilmPage = styled(FilmPageContainer)`
    width: 100%;
    border: 1px solid black;
    border-radius: 1.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;

    & .filmImage {
        width: 40%;
    }

    & .filmInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
