import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { UserForm } from "../UserForm/user-form";
import { setUser } from "../../redux/slices/user-slice";
import { useNavigate } from "react-router-dom";
import { auth, database } from "../../db/db";
import { useState } from "react";
import { ref, set } from "firebase/database";

export const Registration = () => {
    const [serverError, setServerError] = useState(null);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRegister = ({ email, password }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const userRef = ref(database, `/favorites/${user.uid}`);

                set(userRef, {
                    userId: user.uid,
                    favorites: {},
                });
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );

                navigate("/");
            })
            .catch((err) => console.log(err)); //TODO
    };

    return (
        <UserForm
            title="Регистрация"
            serverError={serverError}
            handleClick={handleRegister}
        />
    );
};
