import { setUser } from "../../redux/slices/user-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../UserForm/user-form";
import { useState } from "react";
import { loginUser } from "../../db/actions";

export const Login = () => {
    const [serverError, setServerError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async ({ email, password }) => {
        setIsLoading(true);

        await loginUser(email, password)
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
            .catch((err) => {
                switch (err) {
                    case "auth/invalid-credential":
                        setServerError("Неверный email или пароль");
                        break;
                }
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <UserForm
            title="Вход"
            isLoading={isLoading}
            serverError={serverError}
            setServerError={setServerError}
            handleClick={handleLogin}
        />
    );
};
