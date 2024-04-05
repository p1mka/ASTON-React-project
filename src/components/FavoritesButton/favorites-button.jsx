import { Icon } from "../Icon/icon";
import PropTypes from "prop-types";
import { FavoritesLoader } from "../FavoritesLoader/favorites-loader";
import styled from "styled-components";

const FavoritesButtonContainer = ({
    isFavorite,
    isLoading,
    onFavoriteButtonClick,
    className,
}) => {
    const buttonInnerText = (
        <div className="button-inner-text">
            {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
            <Icon
                id={
                    isFavorite
                        ? "fa-heart-circle-minus"
                        : "fa-heart-circle-plus"
                }
                fill={true}
            />
        </div>
    );

    return (
        <button className={className} onClick={onFavoriteButtonClick}>
            {isLoading ? <FavoritesLoader /> : buttonInnerText}
        </button>
    );
};

export const FavoritesButton = styled(FavoritesButtonContainer)`
    cursor: pointer;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ isFavorite }) =>
        !isFavorite ? "#2b7c3d" : "#bc6d6d"};
    color: #fff;
    -webkit-box-shadow: 3px 3px 5px 0px rgba(148, 148, 148, 1);
    -moz-box-shadow: 3px 3px 5px 0px rgba(148, 148, 148, 1);
    box-shadow: 3px 3px 5px 0px rgba(148, 148, 148, 1);

    & .button-inner-text {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

FavoritesButton.propTypes = {
    isFavorite: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool,
    onFavoriteButtonClick: PropTypes.func.isRequired,
};
