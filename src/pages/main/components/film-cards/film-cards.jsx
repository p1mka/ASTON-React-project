import { FilmCard } from "./components";
import styled from "styled-components";

const FilmCardsContainer = ({ films, className }) => {
    return (
        <div className={className}>
            {films.map((film) => (
                <FilmCard key={film.id} film={film} />
            ))}
        </div>
    );
};

export const FilmCards = styled(FilmCardsContainer)`
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;
    align-items: center;
`;
