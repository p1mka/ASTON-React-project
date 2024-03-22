import { auth } from "../../../../db/db";
import { Link } from "react-router-dom";
import { removeUser } from "../../../../redux/slices/user-slice";
import { selectUser } from "../../../../redux/selectors";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const UserBarContainer = ({ className }) => {
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const handleSignOut = () => {
        signOut(auth).then(() => dispatch(removeUser()));
    };

    return (
        <div className={className}>
            {user.token ? (
                <div className="nav-buttons">
                    <button>Избранное</button>
                    <button>История</button>
                    <button onClick={handleSignOut}>Выход</button>
                </div>
            ) : (
                <div className="login">
                    <p>Вход</p>
                    <Link to="/authorize">
                        <p>&#9094;</p>
                    </Link>
                </div>
            )}
        </div>
    );
};

export const UserBar = styled(UserBarContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & .nav-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 0.5rem;
    }
    & .login {
        display: flex;
    }
`;
