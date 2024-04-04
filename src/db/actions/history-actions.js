import { get, push, ref, remove } from "firebase/database";
import { database } from "../db";

export const getHistoryFromDb = async (userId) => {
    try {
        const historyRef = ref(database, `/history/${userId}/history`);

        const keywords = await get(historyRef).then((snapshot) => {
            if (snapshot.val()) {
                const dataArr = Object.entries(snapshot.val());
                return dataArr.map(([id, keyword]) => ({ id, keyword }));
            }
            return [];
        });

        return keywords;
    } catch (err) {
        return { error: err };
    }
};

export const addToHistory = async (userId, keywords) => {
    try {
        const newHistoryRef = ref(database, `history/${userId}/history`);
        const newKeywordRef = await push(newHistoryRef, keywords);

        const newKeywordId = newKeywordRef.key;

        return { id: newKeywordId, keyword: keywords };
    } catch (err) {
        return { error: err };
    }
};

export const removeFromHistory = async (userId, id) => {
    try {
        await remove(ref(database, `history/${userId}/history/${id}`));
    } catch (err) {
        return { error: err };
    }
};
