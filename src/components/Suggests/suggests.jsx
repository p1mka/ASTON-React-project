import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useGetSearchedFilmsQuery } from "../../redux";
import styled, { keyframes } from "styled-components";
import { SimpleLoader } from "../SimpleLoader/simple-loader";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const SuggestsContainer = ({
    className,
    onOutsideClick,
    searchPhrase,
    setShowResults,
}) => {
    const {
        data: suggests = [],
        isLoading,
        isFetching,
    } = useGetSearchedFilmsQuery(searchPhrase, {
        skip: searchPhrase.trim().length <= 0,
    });

    const onSuggestClick = () => {
        setShowResults(false);
    };

    return (
        <div className={className} onMouseLeave={() => onOutsideClick()}>
            {isFetching || isLoading ? (
                <div className="loader">
                    <SimpleLoader />
                </div>
            ) : searchPhrase && !suggests.length ? (
                <h3>Фильмов по Вашему запросу не найдено...</h3>
            ) : (
                suggests.map(({ id, imgUrl, title }) => (
                    <Link key={id} to={`/${id}`}>
                        <div
                            className="finded-suggest"
                            onClick={onSuggestClick}
                        >
                            <img src={imgUrl} alt="Изображение недоступно..." />
                            {title}
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export const Suggests = styled(SuggestsContainer)`
    display: ${({ show }) => (show ? "flex" : "none")};
    gap: 0.5rem;
    padding: 1rem 10%;
    flex-wrap: wrap;
    position: fixed;
    background: #f0f0f0;
    min-height: 6rem;
    top: 6.5rem;
    left: 5px;
    right: 5px;
    box-shadow: 5px 3px 6px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    z-index: 300;
    animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.5s ease forwards;

    & .loader {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & .finded-suggest {
        width: 6rem;
        height: 160px;
        margin: 0 0.5rem;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        word-wrap: wrap;
        overflow: hidden;
    }
    & .finded-suggest > img {
        max-height: 100px;
        object-fit: contain;
        border-radius: 0.5rem;
    }
    & .finded-suggest:hover {
        transform: scale(110%);
        transition: transform 0.3s;
    }

    & a {
        color: #000;
    }
`;

Suggests.propTypes = {
    onOutsideClick: PropTypes.func,
    searchPhrase: PropTypes.string.isRequired,
    setShowResults: PropTypes.func,
};
