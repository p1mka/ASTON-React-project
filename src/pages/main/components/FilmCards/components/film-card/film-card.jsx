import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FilmCardContainer = ({ film, className }) => {
    const { id, title, previewImgUrl, rating, year, genres } = film;

    const navigate = useNavigate();

    const onFilmCardClick = () => navigate(`/${id}`);

    return (
        <div className={className} onClick={onFilmCardClick}>
            <div className="imgAndTitle">
                <img src={previewImgUrl} alt={"Картинка в пути..."}></img>
                <h3>{title}</h3>
            </div>
            <p>
                Рейтинг: <b>{rating}</b>
            </p>
            <p>
                Год выхода: <b>{year}</b>
            </p>
        </div>
    );
};

export const FilmCard = styled(FilmCardContainer)`
    display: flex;
    flex-direction: column;
    width: 250px;
    border-radius: 0.5em;
    margin-bottom: 1.5em;
    height: 450px;

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
