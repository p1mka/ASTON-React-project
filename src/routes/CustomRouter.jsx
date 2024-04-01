import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("../pages/main/main-page"));
const FilmPage = lazy(() => import("../pages/film/film-page"));
const RegisterPage = lazy(() => import("../pages/register/register-page"));
const AuthorizePage = lazy(() => import("../pages/authorize/authorize-page"));
const FavoritesPage = lazy(() => import("../pages/favorites/favorites-page"));

export const PATHS = {
    MAIN: "/",
    AUTHORIZE: "/authorize",
    REGISTRATION: "/registration",
    FILM_CARD: `/:id`,
    FAVORITES: "/favorites",
    ERROR: "*",
};

export const CustomRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка страницы...</div>}>
            <Routes>
                <Route path={PATHS.MAIN} element={<MainPage />} />
                <Route path={PATHS.AUTHORIZE} element={<AuthorizePage />} />
                <Route path={PATHS.REGISTRATION} element={<RegisterPage />} />
                <Route path={PATHS.FILM_CARD} element={<FilmPage />} />
                <Route path={PATHS.FAVORITES} element={<FavoritesPage />} />
                <Route path={PATHS.ERROR} element={<h1>404 not found</h1>} />
            </Routes>
        </Suspense>
    );
};
