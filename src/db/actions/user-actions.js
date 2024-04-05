import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../db";

export const registerUser = async (email, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        throw err.code;
    }
};

export const loginUser = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        throw err.code;
    }
};

export const logout = async () => {
    try {
        return await signOut(auth);
    } catch (err) {
        throw err;
    }
};
