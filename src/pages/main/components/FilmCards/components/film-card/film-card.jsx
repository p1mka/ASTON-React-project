import styled from "styled-components";
const FilmCardContainer = ({ film, className }) => {
    const { id, title, previewImgUrl, rating, year, genres } = film;

    return (
        <div className={className}>
            <div className="imgAndTitle">
                <img src={previewImgUrl} alt={"Картинка в пути..."}></img>
                <h3>{title}</h3>
            </div>
            <p>{rating}</p>
            <p>{year}</p>
        </div>
    );
};

export const FilmCard = styled(FilmCardContainer)`
    display: flex;
    flex-direction: column;
    width: 250px;
    border-radius: 0.5em;
    margin-bottom: 1.5em;

    & .imgAndTitle {
        display: flex;
        flex-direction: column;
    }
`;
