import { useHistory } from "../../hooks";
import HistoryItem from "./components/history-item";
import { Loader } from "../../components";
import styled from "styled-components";

const HistoryPageContainer = ({ className }) => {
    const { history, isLoading, removeHistory } = useHistory();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={className}>
            <h1>История поиска</h1>

            {history.length ? (
                history.map(({ id, keyword }) => (
                    <HistoryItem
                        key={id}
                        id={id}
                        keyword={keyword}
                        handleRemoveHistory={removeHistory}
                    />
                ))
            ) : (
                <h3>История поиска отсутствует...</h3>
            )}
        </div>
    );
};

const HistoryPage = styled(HistoryPageContainer)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export default HistoryPage;
