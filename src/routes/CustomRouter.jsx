import { Routes, Route } from "react-router-dom";
import { AuthorizePage, FilmPage, MainPage, RegisterPage } from "../pages";

export const PATHS = {
    MAIN: "/",
    AUTHORIZE: "/authorize",
    REGISTRATION: "/registration",
    FILM_CARD: `/:id`,
    ERROR: "*",
};

export const CustomRouter = () => {
    return (
        <>
            <Routes>
                <Route path={PATHS.MAIN} element={<MainPage />} />
                <Route path={PATHS.AUTHORIZE} element={<AuthorizePage />} />
                <Route path={PATHS.REGISTRATION} element={<RegisterPage />} />
                <Route path={PATHS.FILM_CARD} element={<FilmPage />} />
                <Route path={PATHS.ERROR} element={<h1>404 not found</h1>} />
            </Routes>
        </>
    );
};
