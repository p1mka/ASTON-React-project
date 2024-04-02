import { Link } from "react-router-dom";
import { Registration } from "../../components";
import styled from "styled-components";

const RegisterPageContainer = ({ className }) => {
    return (
        <div className={className}>
            <h1> Регистрация </h1>
            <Registration />
            <p>
                Уже есть аккаунт? <Link to="/authorize"> Войдите!</Link>
            </p>
        </div>
    );
};

const RegisterPage = styled(RegisterPageContainer)`
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

export default RegisterPage;
