import { Routes, Route } from "react-router-dom";
import { Film, Main } from "../pages";

export const PATHS = {
    MAIN: "/",
    AUTHORIZE: "/authorize",
    REGISTRATION: "/registration",
    FILM_CARD: `/:id`,
};

export const CustomRouter = () => {
    return (
        <>
            <Routes>
                <Route path={PATHS.MAIN} element={<Main />} />
                <Route path={PATHS.AUTHORIZE} element={"Авторизация"} />
                <Route path={PATHS.REGISTRATION} element={"Регистрация"} />
                <Route path={PATHS.FILM_CARD} element={<Film />} />
            </Routes>
        </>
    );
};
