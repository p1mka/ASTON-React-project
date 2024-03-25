import { Link } from "react-router-dom";
import styled from "styled-components";
import { Login } from "../../components";

const AuthorizePageContainer = ({ className }) => {
    return (
        <div className={className}>
            <h1> Авторизация </h1>
            <Login />
            <p>
                Нет аккаунта?{" "}
                <Link to="/registration"> Зарегистрируйтесь!</Link>
            </p>
        </div>
    );
};

export const AuthorizePage = styled(AuthorizePageContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
