import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FavoritesButton } from "../../../../../../components";
import { useFavorites } from "../../../../../../hooks";
import { selectUserId } from "../../../../../../redux/selectors";
import styled from "styled-components";

const FilmCardContainer = ({ film, className }) => {
    const userId = useSelector(selectUserId);

    const { id, title, previewImgUrl, rating, year, genres } = film;

    const { isLoading, getIsFavorite, toggleFavorites } = useFavorites();

    const isFavorite = getIsFavorite(id);

    const onFavoriteButtonClick = () => {
        toggleFavorites(id);
    };

    const navigate = useNavigate();

    const onFilmCardClick = () => navigate(`/${id}`);

    return (
        <div className={className}>
            <div className="imgAndTitle" onClick={onFilmCardClick}>
                <img src={previewImgUrl} alt={"Картинка в пути..."}></img>
                <h3>{title}</h3>
            </div>
            <p>
                Рейтинг: <b>{rating}</b>
            </p>
            <p>
                Год выхода: <b>{year}</b>
            </p>

            {userId && (
                <FavoritesButton
                    movieId={id}
                    isFavorite={isFavorite}
                    onFavoriteButtonClick={onFavoriteButtonClick}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
};

export const FilmCard = styled(FilmCardContainer)`
    display: flex;
    flex-direction: column;
    width: 250px;
    border-radius: 0.5em;
    margin-bottom: 1.5em;
    min-height: 450px;
    height: 500px;

    & .imgAndTitle {
        display: flex;
        flex-direction: column;
    }

    & img {
        width: 250px;
        height: 350px;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
    }
`;
