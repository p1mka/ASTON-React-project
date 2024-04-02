import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/selectors";

export const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector(selectIsAuth);
    if (!isAuth) {
        return <Navigate to="/authorize" replace />;
    }

    return <div>{children}</div>;
};
