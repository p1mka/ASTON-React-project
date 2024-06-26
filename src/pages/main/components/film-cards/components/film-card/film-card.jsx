import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FavoritesButton, FavoritesLoader } from "../../../../../../components";
import { useFavorites } from "../../../../../../hooks";
import styled from "styled-components";

const FilmCardContainer = ({ film, className }) => {
    const { id, title, previewImgUrl, rating, year } = film;

    const {
        userId,
        isFavoritesIdsLoading,
        isFavoriteLoading,
        getIsFavorite,
        toggleFavorites,
    } = useFavorites();

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
            <div className="short-info">
                <p>
                    Рейтинг: <b>{rating}</b>
                </p>
                <p>
                    Год выхода: <b>{year}</b>
                </p>
            </div>

            {userId &&
                (isFavoritesIdsLoading ? (
                    <FavoritesLoader />
                ) : (
                    <FavoritesButton
                        movieId={id}
                        isFavorite={isFavorite}
                        onFavoriteButtonClick={onFavoriteButtonClick}
                        isLoading={isFavoriteLoading}
                    />
                ))}
        </div>
    );
};

export const FilmCard = styled(FilmCardContainer)`
    display: flex;
    flex-direction: column;
    width: 250px;
    border-radius: 0.5em;
    margin-bottom: 1.5em;
    height: 500px;
    justify-content: center;

    & .imgAndTitle {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    & .imgAndTitle > h3 {
        height: 30px;
        overflow: hidden;
    }

    & img {
        width: 250px;
        height: 350px;
        object-fit: cover;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
    }
`;

FilmCard.propTypes = {
    film: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        previewImgUrl: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }),
};
