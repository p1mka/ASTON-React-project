import { useEffect } from "react";
import {
    selectHistoryIsLoading,
    selectHistoryKeywords,
    selectUserId,
} from "../redux/selectors";
import {
    addKeywordToHistory,
    getHistory,
    removeKeywordFromHistory,
} from "../redux/thunks/history";

import { useDispatch, useSelector } from "react-redux";

export const useHistory = () => {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);

    useEffect(() => {
        if (userId) {
            dispatch(getHistory({ userId }));
        }
    }, [dispatch, userId]);

    const history = useSelector(selectHistoryKeywords);
    const isLoading = useSelector(selectHistoryIsLoading);

    const addHistory = (keyword) => {
        dispatch(addKeywordToHistory({ userId, keyword }));
    };

    const removeHistory = (keyword) => {
        dispatch(removeKeywordFromHistory({ userId, keyword }));
    };

    return { history, isLoading, userId, addHistory, removeHistory };
};
