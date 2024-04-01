import { Icon } from "../../../Icon/icon";
import { Input } from "../../../Input/input";
import { Suggests } from "./components/suggests";
import { useState } from "react";
import styled from "styled-components";

const SearchBarContainer = ({ className }) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [showResults, setShowResults] = useState(false);

    const onSearchInputChange = ({ target }) => {
        setSearchPhrase(target.value);
        setShowResults(true);
    };

    const onOutsideClick = () => {
        setSearchPhrase("");
        if (showResults) {
            setShowResults(false);
        }
    };

    return (
        <div className={className}>
            <Input
                width={"500px"}
                onChange={onSearchInputChange}
                placeholder="Поиск фильма..."
            />
            <Icon fill={true} id={"fa-magnifying-glass"} size={"24px"} />
            {showResults && searchPhrase && (
                <Suggests
                    show={showResults}
                    onOutsideClick={onOutsideClick}
                    searchPhrase={searchPhrase}
                />
            )}
        </div>
    );
};

export const SearchBar = styled(SearchBarContainer)`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
