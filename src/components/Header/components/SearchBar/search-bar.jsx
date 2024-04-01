import { useHistory } from "../../../../hooks";
import { selectSearchPhrase } from "../../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../Icon/icon";
import { Input } from "../../../Input/input";
import { Suggests } from "./components/suggests";
import { useState } from "react";
import { setSearchPhrase } from "../../../../redux";
import styled from "styled-components";

const SearchBarContainer = ({ className }) => {
    const [showResults, setShowResults] = useState(false);

    const searchPhrase = useSelector(selectSearchPhrase);
    const dispatch = useDispatch();

    const { addHistory } = useHistory();

    const onSearchInputChange = ({ target }) => {
        dispatch(setSearchPhrase(target.value));
        setShowResults(true);
    };

    const onOutsideClick = () => {
        dispatch(setSearchPhrase(""));
        if (showResults) {
            setShowResults(false);
        }
    };

    const onSearchButtonClick = () => {
        if (searchPhrase) {
            console.log(searchPhrase);
            addHistory(searchPhrase);
        }
    };

    return (
        <div className={className}>
            <Input
                width={"500px"}
                value={searchPhrase}
                onChange={onSearchInputChange}
                placeholder="Поиск фильма..."
            />
            <Icon
                fill={true}
                id={"fa-magnifying-glass"}
                size={"24px"}
                onClick={onSearchButtonClick}
            />
            {showResults && searchPhrase && (
                <Suggests
                    show={showResults}
                    onOutsideClick={onOutsideClick}
                    searchPhrase={searchPhrase}
                    setShowResults={setShowResults}
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
