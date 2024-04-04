import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const HistoryItemContainer = ({
    className,
    id,
    keyword,
    handleRemoveHistory,
}) => {
    return (
        <div className={className}>
            <NavLink to={`/search?keyword=${keyword}`}>
                <h4>{keyword}</h4>
            </NavLink>
            <button onClick={() => handleRemoveHistory(id)}>Удалить</button>
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

HistoryItem.propTypes = {
    id: PropTypes.string.isRequired,
    keyword: PropTypes.string.isRequired,
    handleRemoveHistory: PropTypes.func.isRequired,
};

export default HistoryItem;
