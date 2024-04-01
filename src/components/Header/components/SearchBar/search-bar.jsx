import { useDebounce, useHistory, useQueryParams } from "../../../../hooks";
import { useGetSearchedFilmsQuery } from "../../../../redux";
import { Icon } from "../../../Icon/icon";
import { Input } from "../../../Input/input";
import { Suggests } from "./components/suggests";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBarContainer = ({ className }) => {
    const [showResults, setShowResults] = useState(false);
    const keyword = useQueryParams();
    const [searchPhrase, setSearchPhrase] = useState(keyword || "");

    const { userId, addHistory } = useHistory();

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
                width={"500px"}
                value={searchPhrase}
                onChange={onSearchInputChange}
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
