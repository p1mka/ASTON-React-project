import { FavoritesButton, Loader } from "../../components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetFilmByIdQuery } from "../../redux";
import { useFavorites } from "../../hooks";
import { selectUserId } from "../../redux/selectors";
import styled from "styled-components";

const FilmPageContainer = ({ className }) => {
    const userId = useSelector(selectUserId);

    const { id } = useParams();

    const { data: film, isLoading, isError } = useGetFilmByIdQuery(id);

    const { getIsFavorite, toggleFavorites } = useFavorites();

    const isFavorite = getIsFavorite(Number(id));

    const onFavoriteButtonClick = () => {
        toggleFavorites(Number(id));
    };

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
                className="film-image"
                src={imgUrl}
                alt="Картинка в пути..."
            ></img>
            <div className="film-nfo">
                <h1>{title}</h1>
                <div className="country">
                    Страна: <h3>{countries[0]?.country}</h3>
                </div>
                <div className="description">{description}</div>
                {userId && (
                    <FavoritesButton
                        movieId={id}
                        isFavorite={isFavorite}
                        onFavoriteButtonClick={onFavoriteButtonClick}
                    />
                )}
            </div>
        </div>
    );
};

const FilmPage = styled(FilmPageContainer)`
    width: 100%;
    border-radius: 1.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 7px 5px 0px rgba(0, 0, 0, 0.75);

    & .film {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .film-image {
        width: 40%;
    }

    & .film-info {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        align-items: center;
    }
    & .country {
        display: flex;
        align-items: center;
    }
    & .description {
        /* border: 1px solid black; */
        border-radius: 1rem;
        padding: 1.5rem 0;
    }
`;

export default FilmPage;
