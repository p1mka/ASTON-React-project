import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/selectors";

export const ProtectedAuthRoute = ({ children }) => {
    const isAuth = useSelector(selectIsAuth);

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return <div>{children}</div>;
};
