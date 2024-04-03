import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedAuthRoute } from "./ProtectedAuthRoute";

const MainPage = lazy(() => import("../pages/main/main-page"));
const FilmPage = lazy(() => import("../pages/film/film-page"));
const RegisterPage = lazy(() => import("../pages/register/register-page"));
const AuthorizePage = lazy(() => import("../pages/authorize/authorize-page"));
const FavoritesPage = lazy(() => import("../pages/favorites/favorites-page"));
const HistoryPage = lazy(() => import("../pages/history/history-page"));
const SearchPage = lazy(() => import("../pages/search/search-page"));

export const PATHS = {
    MAIN: "/",
    AUTHORIZE: "/authorize",
    REGISTRATION: "/registration",
    FILM_CARD: `/:id`,
    FAVORITES: "/favorites",
    HISTORY: "/history",
    SEARCH: "/search",
    ERROR: "*",
};

export const CustomRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка страницы...</div>}>
            <Routes>
                <Route path={PATHS.MAIN} element={<MainPage />} />
                <Route
                    path={PATHS.AUTHORIZE}
                    element={
                        <ProtectedAuthRoute>
                            <AuthorizePage />
                        </ProtectedAuthRoute>
                    }
                />
                <Route
                    path={PATHS.REGISTRATION}
                    element={
                        <ProtectedAuthRoute>
                            <RegisterPage />
                        </ProtectedAuthRoute>
                    }
                />
                <Route path={PATHS.FILM_CARD} element={<FilmPage />} />

                <Route
                    path={PATHS.FAVORITES}
                    element={
                        <ProtectedRoute>
                            <FavoritesPage />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path={PATHS.HISTORY}
                    element={
                        <ProtectedRoute>
                            <HistoryPage />
                        </ProtectedRoute>
                    }
                />

                <Route path={PATHS.SEARCH} element={<SearchPage />} />
                <Route
                    path={PATHS.ERROR}
                    element={<h1>Страница не найдена...</h1>}
                />
            </Routes>
        </Suspense>
    );
};
