import { useDebounce, useHistory, useQueryParams } from "../../../../hooks";
import { useThemeContext } from "../../../../providers/theme-context";
import { Icon } from "../../../Icon/icon";
import { Input } from "../../../Input/input";
import { Suggests } from "../../../Suggests/suggests";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBarContainer = ({ className }) => {
    const searchInputRef = useRef(null);
    const [showResults, setShowResults] = useState(false);

    const keyword = useQueryParams();

    const [searchPhrase, setSearchPhrase] = useState(keyword || "");

    const { headerColor } = useThemeContext();

    const { userId, addHistory } = useHistory();

    const debounceSearch = useDebounce(searchPhrase, 500);

    useEffect(() => {
        if (keyword) {
            return setSearchPhrase(keyword);
        }
        setSearchPhrase("");
    }, [keyword]);

    const navigate = useNavigate();

    const onSearchInputChange = (e) => {
        setSearchPhrase(e.target.value);
        setShowResults(true);
    };

    const onEnterPress = (e) => {
        if (e.key === "Enter" && searchPhrase) {
            setShowResults(false);
            navigate(`/search?keyword=${searchPhrase}`);
            if (userId) {
                addHistory(searchPhrase);
            }
        }
    };

    const onOutsideClick = () => {
        if (searchInputRef.current) {
            searchInputRef.current.blur();
        }
        if (showResults) {
            setShowResults(false);
        }
    };

    const onSearchButtonClick = () => {
        setShowResults(false);
        if (searchPhrase && userId) {
            addHistory(searchPhrase);
        }
    };

    return (
        <div className={className}>
            <Input
                ref={searchInputRef}
                header={headerColor}
                width={"500px"}
                value={searchPhrase}
                onChange={onSearchInputChange}
                onFocus={onSearchInputChange}
                onKeyUp={onEnterPress}
                placeholder="Поиск фильма..."
            />
            <Link
                to={`/search?keyword=${searchPhrase}`}
                disabled={!searchPhrase}
            >
                <Icon
                    fill={true}
                    id={"fa-magnifying-glass"}
                    size={"24px"}
                    onClick={onSearchButtonClick}
                />
            </Link>
            {searchPhrase && (
                <Suggests
                    show={showResults}
                    onOutsideClick={onOutsideClick}
                    searchPhrase={debounceSearch}
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
