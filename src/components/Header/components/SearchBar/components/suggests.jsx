import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDebounce } from "../../../../../hooks";
import { useGetSearchedFilmsQuery } from "../../../../../redux";

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
    const navigate = useNavigate();
    const onSuggestClick = (id) => {
        setShowResults(false);
        navigate(`/${id}`);
    };

    const debounceSearch = useDebounce(searchPhrase, 1000);
    const { data: suggests } = useGetSearchedFilmsQuery(debounceSearch, {
        skip: searchPhrase.trim().length <= 0,
    });

    return (
        <div className={className} onMouseLeave={() => onOutsideClick()}>
            {!!!debounceSearch ? (
                <p>Загрузка данных...</p>
            ) : (
                <>
                    {suggests && !suggests.length && !!!debounceSearch && (
                        <h3>Фильмов по Вашему запросу не найдено...</h3>
                    )}
                    {suggests.map(({ id, imgUrl, title }) => (
                        <div
                            className="finded-suggest"
                            key={id}
                            onClick={() => onSuggestClick(id)}
                        >
                            <img src={imgUrl} alt="Изображение недоступно..." />
                            {title}
                        </div>
                    ))}
                </>
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
    top: 5.8rem;
    left: 5px;
    right: 5px;
    box-shadow: 5px 3px 6px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    z-index: 300;
    animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.5s ease forwards;

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
`;
