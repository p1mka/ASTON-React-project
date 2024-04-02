import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../db/db";
import { useDispatch } from "react-redux";
import { UserForm } from "../UserForm/user-form";
import { setUser } from "../../redux/slices";

export const Registration = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRegister = async ({ email, password }) => {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );

                navigate("/");
            })
            .catch((e) => {
                console.log(e.code);
                switch (e.code) {
                    case "auth/email-already-in-use":
                        setServerError("Этот e-mail уже зарегистрирован!");
                        break;
                }
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <UserForm
            title="Регистрация"
            isLoading={isLoading}
            serverError={serverError}
            setServerError={setServerError}
            handleClick={handleRegister}
        />
    );
};
