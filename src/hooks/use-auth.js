import { useSelector } from "react-redux";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user-slice";

export const useAuth = () => {
    const dispatch = useDispatch();

    const tokenJSON = localStorage.getItem("token") || undefined;

    if (!tokenJSON) {
        return;
    }

    const token = JSON.parse(tokenJSON);

    const auth = getAuth();

    signInWithCustomToken(auth, token)
        .then(({ user }) => {
            dispatch(
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                })
            );
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });

    // return {
    //     isAuth: !!token,
    //     email,
    //     token,
    //     id,
    // };
};
