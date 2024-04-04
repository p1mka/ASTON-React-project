import { useSelector } from "react-redux";
import { Navigate, useMatch } from "react-router-dom";
import { selectIsAuth } from "../redux/selectors";

export const ProtectedRoute = ({ children }) => {
    const authMatch = useMatch("/registration");
    const isAuth = useSelector(selectIsAuth);
    if (!isAuth) {
        return <Navigate to="/authorize" replace />;
    }
    if (isAuth && authMatch) {
        return <Navigate to="/" replace />;
    }

    return <div>{children}</div>;
};
