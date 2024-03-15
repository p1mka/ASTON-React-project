import { Routes, Route } from "react-router-dom";
import { Main } from "../pages";

export const PATHS = {
    MAIN: "/",
};

export const CustomRouter = () => {
    return (
        <>
            <Routes>
                <Route path={PATHS.MAIN} element={<Main />} />
            </Routes>
        </>
    );
};
