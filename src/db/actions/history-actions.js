import { get, push, ref, remove } from "firebase/database";
import { database } from "../db";

export const getHistoryFromDb = async (userId) => {
    try {
        const historyRef = ref(database, `/history/${userId}/history`);

        const keywords = await get(historyRef).then((snapshot) => {
            if (snapshot.val()) {
                return Object.values(snapshot.val());
            }
            return [];
        });

        return keywords;
    } catch (err) {
        return err;
    }
};

export const addToHistory = async (userId, keywords) => {
    try {
        const newHistoryRef = ref(database, `history/${userId}/history`);
        await push(newHistoryRef, keywords);
    } catch (err) {
        return console.log(err); // TODO
    }
};

export const removeFromHistory = async (userId, keyword) => {
    try {
        const historyRef = ref(database, `history/${userId}/history`);
        const snapshot = await get(historyRef);
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val() === keyword) {
                    remove(childSnapshot.ref);
                }
            });
        }
    } catch (err) {
        return { error: err };
    }
};
