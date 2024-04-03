import {
    selectHistoryIsLoading,
    selectHistoryKeywords,
    selectUserId,
} from "../redux/selectors";
import {
    addKeywordToHistory,
    removeKeywordFromHistory,
} from "../redux/thunks/history";

import { useDispatch, useSelector } from "react-redux";

export const useHistory = () => {
    const dispatch = useDispatch();

    const userId = useSelector(selectUserId);
    const history = useSelector(selectHistoryKeywords);
    const isLoading = useSelector(selectHistoryIsLoading);

    const addHistory = (keyword) => {
        dispatch(addKeywordToHistory({ userId, keyword }));
    };

    const removeHistory = (id) => {
        dispatch(removeKeywordFromHistory({ userId, id }));
    };

    return { history, isLoading, userId, addHistory, removeHistory };
};
