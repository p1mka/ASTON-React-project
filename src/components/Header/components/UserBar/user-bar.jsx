import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../redux/selectors";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../../../../db/db";
import { removeUser } from "../../../../redux/slices/user-slice";

const UserBarContainer = ({ className }) => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

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
