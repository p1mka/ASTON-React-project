import { Icon } from "../Icon/icon";
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

    return isLoading ? (
        <div className={className}>
            <div className="loader"></div>
        </div>
    ) : (
        <button className={className} onClick={onFavoriteButtonClick}>
            {buttonInnerText}
        </button>
    );
};

export const FavoritesButton = styled(FavoritesButtonContainer)`
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
        !isFavorite ? "#2b7c3d" : "#777777"};
    color: #fff;
    -webkit-box-shadow: 3px 3px 5px 0px rgba(148, 148, 148, 1);
    -moz-box-shadow: 3px 3px 5px 0px rgba(148, 148, 148, 1);
    box-shadow: 3px 3px 5px 0px rgba(148, 148, 148, 1);

    & .button-inner-text {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    & .loader {
        height: 4px;
        width: 130px;
        --c: no-repeat linear-gradient(#6100ee 0 0);
        background: var(--c), var(--c), #d7b8fc;
        background-size: 60% 100%;
        animation: l16 3s infinite;
    }
    @keyframes l16 {
        0% {
            background-position:
                -150% 0,
                -150% 0;
        }
        66% {
            background-position:
                250% 0,
                -150% 0;
        }
        100% {
            background-position:
                250% 0,
                250% 0;
        }
    }
`;
