import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HistoryItemContainer = ({ className, keyword, handleRemoveHistory }) => {
    return (
        <div className={className}>
            <NavLink to={`/search?keyword=${keyword}`}>
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
