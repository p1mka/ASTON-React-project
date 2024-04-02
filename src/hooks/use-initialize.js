import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { isAuthSlice, removeUser, setUser } from "../redux";
import { selectInitializeSuccess } from "../redux/selectors";
import { auth } from "../db/db";
import { getFavorites } from "../redux/thunks/favorite";

export const useInitialize = () => {
    const dispatch = useDispatch();
    const { initialize, toggleAuth } = isAuthSlice.actions;

    const initializeSuccess = useSelector(selectInitializeSuccess);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                dispatch(
                    setUser({
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid,
                    })
                );
                await dispatch(getFavorites({ userId: user.uid }));
                dispatch(toggleAuth(true));
            } else {
                dispatch(removeUser());
            }
            dispatch(initialize(true));
        });
    }, [dispatch, initialize, toggleAuth]);
    return initializeSuccess;
};
