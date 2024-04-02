import { auth } from "../../../../db/db";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../../redux/slices/user-slice";
import { selectUserId } from "../../../../redux/selectors";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "../../../Icon/icon";
import { clearFavorites } from "../../../../redux";
import { useFavorites } from "../../../../hooks";
import styled from "styled-components";

const UserBarContainer = ({ className }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const userId = useSelector(selectUserId);
    const { favoritesCount } = useFavorites();

    const onLoginIconClick = () => navigate("/authorize");

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(clearFavorites());
            dispatch(removeUser());
            navigate("/");
        });
    };

    const onFavoritesIconClick = () => navigate("/favorites");
    const onHistoryIconClick = () => navigate("/history");

    return (
        <div className={className}>
            {userId ? (
                <div className="nav-buttons">
                    <div className="elements-column">
                        <Icon
                            fill={true}
                            id={"fa-heart"}
                            onClick={onFavoritesIconClick}
                            size={"30px"}
                        />
                        {favoritesCount !== 0 && (
                            <div
                                className="circle"
                                onClick={onFavoritesIconClick}
                            >
                                {favoritesCount}
                            </div>
                        )}
                    </div>
                    <Icon
                        id={"fa-hourglass-half"}
                        onClick={onHistoryIconClick}
                        size={"30px"}
                    />
                    <Icon
                        fill={true}
                        id={"fa-right-from-bracket"}
                        size={"30px"}
                        onClick={handleSignOut}
                    />
                </div>
            ) : (
                <div className="login">
                    <Icon
                        fill={true}
                        id={"fa-right-to-bracket"}
                        size={"30px"}
                        onClick={onLoginIconClick}
                    />
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
        gap: 2rem;
    }
    & .elements-column {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & .login {
        display: flex;
        gap: 0.5rem;
        font-size: 20px;
    }

    & .circle {
        position: absolute;
        left: 1.3rem;
        bottom: 1.7rem;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #2b7c3d;
        font-size: 12px;
        cursor: pointer;
    }
`;
