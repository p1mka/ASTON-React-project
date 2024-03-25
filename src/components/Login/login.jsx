import { auth } from "../../db/db";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/user-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../UserForm/user-form";

export const Login = () => {
    let serverError = "";

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = ({ email, password }) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid,
                    })
                );
                navigate("/");
            })
            .catch((e) => (serverError = e));
    };

    return (
        <UserForm
            title="Вход"
            serverError={serverError}
            handleClick={handleLogin}
        />
    );
};
