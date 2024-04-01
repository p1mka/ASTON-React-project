import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setSearchPhrase } from "../../../redux";
import styled from "styled-components";

const HistoryItemContainer = ({ className, keyword, handleRemoveHistory }) => {
    const dispatch = useDispatch();

    const onKeywordClick = () => dispatch(setSearchPhrase(keyword));

    return (
        <div className={className}>
            <NavLink
                onClick={onKeywordClick}
                // to={`/search?beer_name=${historyItem}`}
            >
                <h4>{keyword}</h4>
            </NavLink>
            <button onClick={() => handleRemoveHistory(keyword)}>
                Удалить
            </button>
        </div>
    );
};

const HistoryItem = styled(HistoryItemContainer)`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & a:hover {
        color: green;
    }
`;

export default HistoryItem;
