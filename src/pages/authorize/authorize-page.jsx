import { Link } from "react-router-dom";
import { Login } from "../../components";
import styled from "styled-components";

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

const AuthorizePage = styled(AuthorizePageContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;

    & a {
        font-size: 18px;
        color: green;
        font-weight: bold;
    }
    & a:hover {
        color: #6ac167;
    }
`;

export default AuthorizePage;
